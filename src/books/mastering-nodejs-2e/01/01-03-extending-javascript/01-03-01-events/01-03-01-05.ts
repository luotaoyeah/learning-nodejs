/*
 * 1. Understanding the Node Environment
 *     1.3. Extending JavaScript
 *         1.3.1. Events
 *             fs.createWriteStream()
 */

import { Readable } from "stream";
import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  let count: number = 0;

  const readable = new Readable();

  readable._read = function() {
    count++;

    if (count > 10) {
      this.push(null);
      return;
    }

    setTimeout(() => {
      this.push(`${count}\n`);
    }, 500);
  };

  const writeStream = fs.createWriteStream(
    "src/books/mastering-nodejs-2e/01/01-03-extending-javascript/01-03-01-events/01-03-01-05.txt",
    {
      flags: "w"
    }
  );

  readable.pipe(writeStream);
}
