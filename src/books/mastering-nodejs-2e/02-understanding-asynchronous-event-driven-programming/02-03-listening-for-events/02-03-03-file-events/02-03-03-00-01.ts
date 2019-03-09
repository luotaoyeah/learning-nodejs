/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.3. File Events
 *             module:fs.watch()
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  fs.watch(
    "src/books/mastering-nodejs-2e/02-understanding-asynchronous-event-driven-programming/02-03-listening-for-events/02-03-03-file-events/02-03-03-00-01.txt",
    {},
    (event: string, filename: string) => {
      console.log(event, filename);
    }
  );
}
