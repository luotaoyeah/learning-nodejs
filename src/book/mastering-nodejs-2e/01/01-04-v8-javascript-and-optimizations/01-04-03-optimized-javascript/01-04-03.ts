/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             util.promisify()
 */

import * as fs from "fs";
import * as util from "util";

console.log("\n-------------------------------------------------- 01");
{
  fs.readFile(
    "src/books/mastering-nodejs-2e/01/01-04-v8-javascript-and-optimizations/01-04-03-optimized-javascript/01-04-03.txt",
    {
      encoding: "utf-8"
    },
    (err: NodeJS.ErrnoException | null, data: string) => {
      if (!err) {
        console.log(data);
      }
    }
  );
}

console.log("\n-------------------------------------------------- 02");
{
  const readFileAsync = util.promisify(fs.readFile);
  readFileAsync(
    "src/books/mastering-nodejs-2e/01/01-04-v8-javascript-and-optimizations/01-04-03-optimized-javascript/01-04-03.txt",
    {
      encoding: "utf-8"
    }
  )
    .then((data: string) => {
      console.log(data);
    })
    .catch((err: Error) => {
      console.error(err.message);
    });
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * nodejs@8 添加了一个工具方法 util.promsify()，将一个 callback 风格的函数，转换成一个 promise 风格的函数，
   * 这个原始函数必须满足：
   *     1. 最后一个参数是一个 callback function，
   *     2. 这个 callback function 的第一个参数是一个 error 对象，
   */

  function fn01(x: any, y: any, cb: (err: NodeJS.ErrnoException | null | null, data?: number) => any) {
    if (Number.isNaN(x) || Number.isNaN(y)) {
      cb(new Error(""));
      return;
    }

    setTimeout(() => {
      cb(null, x + y);
    }, 1000);
  }

  fn01(9, 9, (err: any, data?: number) => {
    console.log("SYNC:", data);
  });

  util
    .promisify(fn01)(9, 9)
    .then((data?: number) => {
      console.log("ASYNC:", data);
    });
}
