/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.2. Exploring Streams
 *         3.2.2. Writable Stream
 *             drain
 */

import { Writable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  /*
   *
   */

  class MyWritable extends Writable {
    _write(
      chunk: any,
      encoding: string,
      callback: (error?: Error | null) => void
    ): void {
      console.log(`_write: ${chunk.toString()}`);
      callback();
    }
  }

  /*
   * 在创建 Writable 对象时，可以通过 highWaterMark 选项设置内部 buffer 的容量，
   * 默认值为 16KB（16 * 1024）
   */
  const myWritable = new MyWritable({
    highWaterMark: 10
  });

  /*
   * 当 write() 方法写入的数据大小超过了内部 buffer 的容量时，
   * write() 方法的返回值就会为 false，
   * 此时，不应该继续调用 write() 方法写入数据，
   * 而是应该监听 drain 事件，在 drain 事件回调函数中继续写入数据
   */
  const written01 = myWritable.write(Buffer.alloc(32, "A"));
  console.log(`written01: ${written01}`);

  if (!written01) {
    myWritable.once("drain", () => {
      const written02 = myWritable.write(Buffer.alloc(9, "B"));
      console.log(`written02: ${written02}`);
      myWritable.end();
    });
  }
}
