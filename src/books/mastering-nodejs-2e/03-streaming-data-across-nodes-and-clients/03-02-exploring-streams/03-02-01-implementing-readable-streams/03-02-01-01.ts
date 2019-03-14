/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.2. Exploring Streams
 *         3.2.1. Implementing Readable Streams
 */

import { Readable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Readable 对象表示数据源，通过继承 Readable 类来实现相关功能
   */
  class MyReadable extends Readable {
    items: Array<string> = ["A", "B", "C", "D"];

    /*
     * 必须实现 _read() 方法，
     * 当 readable 对象上绑定了 `readable` 事件回调函数时，_read() 方法会自动被调用（第一次调用），
     * 在 _read() 方法中通过 Readable.push() 方法添加数据，如果数据不为 null，
     * 则每 push() 一次，就会再次调用 _read() 方法，因此下面的代码总共会调用 _read() 方法五次
     */
    _read(size: number): void {
      let data = this.items.length > 0 ? this.items.shift() : null;
      this.push(data);
      console.log(`_read: ${data}`);
    }
  }

  const myReadable = new MyReadable();

  /*
   * 当 readable 对象内部调用 push() 方法添加数据时，就会触发 `readable` 事件，
   * 在 `readable` 事件回调中可以调用 Readable.read() 方法读取数据，
   * read() 方法默认（objectMode: false）返回的是 Buffer 数据，
   * 每次调用 read() 方法，会从上次读取的位置开始一直读取到最后，
   * 当读取的数据为 null 时，就会触发 `end` 事件
   */
  myReadable.on("readable", () => {
    const data: Buffer = myReadable.read();
    console.log(`readable: ${data.toString("utf-8")}`);
  });

  myReadable.on("end", () => {
    console.log("end");
  });
}
