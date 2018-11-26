/*
 * Understanding the Node Environment
 *     Extending JavaScript
 *         Events
 *             createWriteStream()
 */

import { Readable } from "stream";
import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  const r = new Readable();
  let count = 0;
  r._read = function() {
    count++;
    if (count > 10) {
      r.push(null);
      return;
    }

    setTimeout(function() {
      r.push(`${count}\n`);
    }, 500);
  };

  /*
   * 将数据输出到文件流
   */
  const writeStream = fs.createWriteStream(
    "src/books/mastering-nodejs-2e/01/01-03/01-03-01/01-03-01-04.txt",
    { flags: "w" }
  );

  r.pipe(writeStream);
}
