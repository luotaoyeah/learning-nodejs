/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.2. Exploring Streams
 *         3.2.2. Writable Stream
 */

import { Writable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Readable 对象可以看作是数据源（data source），
   * 对应的，Writable 对象可以看作是数据目标（data target），
   * 我们可以通过实现 Writable 类来实现相关功能
   */

  class MyWritable extends Writable {
    /*
     * 必须实现 _write() 方法
     */
    _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void {
      console.log(`_write: ${chunk.toString()}`);
      callback();
    }
  }

  const myWritable = new MyWritable({
    highWaterMark: 16 * 1024,
    decodeStrings: true
  });

  /*
   * 调用 Writable.write() 方法来写入数据
   */
  const written = myWritable.write(Buffer.alloc(32, "A"));
  console.log(`written: ${written}`);
  myWritable.end();
}
