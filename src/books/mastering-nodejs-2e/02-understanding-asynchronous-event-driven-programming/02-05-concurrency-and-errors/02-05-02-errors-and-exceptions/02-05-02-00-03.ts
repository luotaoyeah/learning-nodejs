/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.2. Errors and Exceptions
 *             promise context
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * promise context
   * 当 promise 中需要抛出一个错误时，可以直接 throw 一个 error 对象，
   * 也可以调用 reject() 方法，此时 reject() 的参数也应该是一个 error 对象
   */

  new Promise(() => {
    throw new Error("ERR01");
  }).catch((e: NodeJS.ErrnoException) => {
    console.error(e.message);
  });

  new Promise(
    (resolve: () => void, reject: (e: NodeJS.ErrnoException) => void) => {
      reject(new Error("ERR02"));
    }
  ).catch((e: NodeJS.ErrnoException) => {
    console.error(e.message);
  });
}
