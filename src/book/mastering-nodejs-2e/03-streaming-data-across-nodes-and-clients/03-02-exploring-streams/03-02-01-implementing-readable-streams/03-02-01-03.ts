/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.2. Exploring Streams
 *         3.2.1. Implementing Readable Streams
 *             Readable.read()
 */

import { Readable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  class MyReader extends Readable {
    _read(size: number): void {
      this.push("NODEJS");
      this.push(null);
    }
  }

  const myReader = new MyReader();

  myReader.on("readable", () => {
    let data;
    /*
     * Readable.read() 方法，可以接收一个参数，
     * 用来指定每次读取多少字节的数据，
     * 如果不指定，默认是读取剩余的所有数据
     */
    while ((data = myReader.read(1))) {
      console.log(data.toString());
    }
  });

  myReader.on("end", () => {
    console.log("end");
  });
}
