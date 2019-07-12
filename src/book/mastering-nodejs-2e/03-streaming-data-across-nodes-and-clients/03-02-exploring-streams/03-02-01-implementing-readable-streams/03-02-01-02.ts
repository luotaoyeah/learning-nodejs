/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.2. Exploring Streams
 *         3.2.1. Implementing Readable Streams
 *             objectMode
 */

import { Readable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果在创建 readable 对象时，设置 objectMode 选项为 true，
   * 则 readable 对象在写入数据（push()）和读取数据（read()）时，
   * 数据格式都是 object 类型，而不是默认的 Buffer 类型
   */

  class MyReadable extends Readable {
    items: Array<any> = [{ x: 1 }, { y: 2 }, { z: 3 }];

    _read(size: number): void {
      let data = this.items.length > 0 ? this.items.shift() : null;
      this.push(data);
      console.log(`_read: ${JSON.stringify(data)}`);
    }
  }

  const myReadable = new MyReadable({
    objectMode: true
  });

  myReadable.on("readable", () => {
    let data;
    while ((data = myReadable.read())) {
      console.log(`readable: ${JSON.stringify(data)}`);
    }
  });

  myReadable.on("end", () => {
    console.log("end");
  });
}
