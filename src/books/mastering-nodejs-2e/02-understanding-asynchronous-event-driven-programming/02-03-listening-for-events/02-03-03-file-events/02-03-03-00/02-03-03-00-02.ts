/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.3. File Events
 *             module:fs.watch()
 */

import * as fs from "fs";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当 fs.watch() 方法监视的目录或文件不存在时，会报 ENOENT（no entity）错误，
   * 因此通常需要首先调用 fs.existsSync() 方法判断路径是否存在
   */
  console.assert(fs.existsSync("foo.txt") === false);

  fs.watch("foo.txt", {}, (event: string, filename: string) => {
    console.log(event, filename);
  });
}
