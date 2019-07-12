/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.2. Promises
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Promise.catch() 方法，可以捕获它前面的任何一个 then() 方法里面抛出来的异常
   */

  new Promise((resolve: (data?: string) => void) => {
    setTimeout(() => {
      resolve("FOO");
    }, 1000);
  })
    .then((data?: any) => {
      console.log(data);
      throw new Error("ERR01");
    })
    .catch((e: any) => {
      console.error(e.message);
    })
    .then(() => {
      return new Promise((resolve: (data: string) => void) => {
        setTimeout(() => {
          resolve("BAR");
        });
      });
    })
    .then((data: string) => {
      console.log(data);
    });
}
