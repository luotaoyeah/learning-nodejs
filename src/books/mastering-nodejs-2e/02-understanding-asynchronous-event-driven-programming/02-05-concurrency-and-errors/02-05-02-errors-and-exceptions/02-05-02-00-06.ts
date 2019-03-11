/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.2. Errors and Exceptions
 *             unhandledRejection
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟 uncaughtException 事件类似，
   * process 的 unhandledRejection 事件可以捕获所有未被捕获的 promise rejections，
   */

  process.on("unhandledRejection", (e: Error, promise: Promise<any>) => {
    console.error(`REJECTION: ${e.message}`);
  });

  new Promise(() => {
    throw new Error("ERR01");
  });

  new Promise((resolve: () => void, reject: (e: Error) => void) => {
    reject(new Error("ERR02"));
  });
}
