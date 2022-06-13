/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.1. Why Use Streams
 *         copy file asynchronously
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 下面的代码，使用异步的（asynchronously）方式来复制文件，
   * 这种方式解决了阻塞 event loop 的问题，但是嵌套了很多的 callback，
   * 同时对于很大的文件，依然会全部放进内存里面，占用过多的内存空间
   */

  fs.readFile(
    "src/books/mastering-nodejs-2e/03-streaming-data-across-nodes-and-clients/03-01-why-use-streams/03-01-00-02.ts",
    (e: NodeJS.ErrnoException | null, data: Buffer) => {
      if (e) {
        throw e;
      }

      console.log(`FILE LENGTH: ${data.length}`);
      fs.writeFile("./dist/03-01-00-02.txt", data, (e: NodeJS.ErrnoException | null) => {
        if (e) {
          throw e;
        }
      });
    }
  );
}
