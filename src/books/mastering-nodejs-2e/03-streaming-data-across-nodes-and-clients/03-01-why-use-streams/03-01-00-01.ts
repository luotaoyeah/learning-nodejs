/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.1. Why Use Streams
 *         copy file synchronously
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 下面的代码演示了，不使用 stream 的方式来复制一个文件到另一个文件，
   * 这种方式的缺点：
   *     1. 因为是 synchronous 的方式，如果文件很大，会阻塞 event loop，
   *     2. 整个文件都会被复制到内存中，如果文件很大，会消耗很多的内存空间
   */

  const buffer: Buffer = fs.readFileSync(
    "src/books/mastering-nodejs-2e/03-streaming-data-across-nodes-and-clients/03-01-why-use-streams/03-01-00-01.ts",
    { flag: "r" }
  );
  console.log(`FILE LENGTH: ${buffer.length}`);
  fs.writeFileSync("./dist/03-01-00-01.txt", buffer);
}
