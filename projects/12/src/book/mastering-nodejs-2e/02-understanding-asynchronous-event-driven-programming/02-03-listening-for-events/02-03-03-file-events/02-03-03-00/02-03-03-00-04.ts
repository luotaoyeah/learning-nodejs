/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.3. File Events
 *             module:fs.watch()
 *                 FSWatcher.close()
 */

import * as fs from "fs";
import { FSWatcher } from "fs";

console.log("\n-------------------------------------------------- 01");
{
  const watcher: FSWatcher = fs.watch(
    "src/books/mastering-nodejs-2e/02-understanding-asynchronous-event-driven-programming/02-03-listening-for-events/02-03-03-file-events/02-03-03-00/02-03-03-00-04.ts",
    {},
    (e: string, filename: string) => {
      console.log(e, filename);
    }
  );

  setTimeout(() => {
    /*
     * 可以通过 module:fs.FSWatcher.close() 方法，手动结束监视活动
     */
    watcher.close();
  }, 1000 * 10);
}
