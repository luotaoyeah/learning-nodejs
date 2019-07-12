/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.2. Understanding the Event Loop
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  fs.readFile(
    "src/books/mastering-nodejs-2e/02-understanding-asynchronous-event-driven-programming/02-02-understanding-the-event-loop/02-02-00/02-02-00-02.txt",
    {
      encoding: "utf-8"
    },
    (e: NodeJS.ErrnoException | null, data: string) => {
      console.log(data);
    }
  );

  console.log("FOO");
}
