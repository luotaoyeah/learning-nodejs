/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.3. File Events
 *             module:fs.watch()
 *                 persistent
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 选项中的 persistent 表示：当前监视活动是否需要阻止进程退出，默认为 true，
   * 如果设为 false，则当前进程没有其他任务时就会退出，即使当前的监视活动仍在进行
   */
  fs.watch(
    "src/books/mastering-nodejs-2e/02-understanding-asynchronous-event-driven-programming/02-03-listening-for-events/02-03-03-file-events/02-03-03-00/02-03-03-00-03.ts",
    {
      persistent: true
    },
    (event: string, filename: string) => {
      console.log(event, filename);
    }
  );
}
