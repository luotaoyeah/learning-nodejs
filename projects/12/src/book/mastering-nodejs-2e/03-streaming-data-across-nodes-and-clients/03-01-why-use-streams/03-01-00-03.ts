/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.1. Why Use Streams
 *         copy file using promises
 */

import * as fs from "fs";
import * as util from "util";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 下面的代码，使用 promise 的方式来复制文件，
   * 这种方式，仍然没有解决大文件占用内存的问题
   */

  util
    .promisify(fs.readFile)(
      "src/books/mastering-nodejs-2e/03-streaming-data-across-nodes-and-clients/03-01-why-use-streams/03-01-00-03.ts"
    )
    .then((data: Buffer) => {
      console.log(`FILE LENGTH: ${data.length}`);
      return util.promisify(fs.writeFile)("./dist/03-01-00-03.txt", data);
    })
    .then(() => {
      console.log("DONE");
    })
    .catch((e: Error) => {
      console.error(e.message);
    });
}
