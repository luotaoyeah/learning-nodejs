/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.1. Why Use Streams
 *         copy file using streams
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 下面的代码，使用 stream 的方式来复制文件
   */

  fs.createReadStream(
    "src/books/mastering-nodejs-2e/03-streaming-data-across-nodes-and-clients/03-01-why-use-streams/03-01-00-04.ts"
  )
    .pipe(fs.createWriteStream("./dist/03-01-00-04.txt"))
    .on("close", () => {
      console.log("DONE");
    });
}
