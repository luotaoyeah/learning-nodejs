/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.2. Promises
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * then() 方法的第二个参数，以及它后面的 catch() 方法，
   * 都可以用来捕获这个 then() 方法中抛出的异常，
   * 当 then() 方法的第二个参数（onrejected）不为空时，
   * 则 then() 方法后面的 catch() 方法会被忽略，不会执行，
   */

  new Promise((resolve: (data?: any) => void, reject: (reason?: any) => void) => {
    reject(new Error("ERR01"));
  })
    .then(
      () => {},
      (e: Error) => {
        console.error(`01: ${e.message}`);
      }
    )
    .catch((e: Error) => {
      /*
       * 这个 catch() 方法不会执行，
       * 因为它前面的 then() 方法的第二个参数不为空
       */
      console.error(`02: ${e.message}`);
    })
    .then(() => {
      throw new Error("ERR02");
    })
    .catch((e: Error) => {
      /*
       * 这个 catch() 方法会执行，
       * 因为它前面的 then() 方法的第二个参数为空
       */
      console.error(`03: ${e.message}`);
    });
}
