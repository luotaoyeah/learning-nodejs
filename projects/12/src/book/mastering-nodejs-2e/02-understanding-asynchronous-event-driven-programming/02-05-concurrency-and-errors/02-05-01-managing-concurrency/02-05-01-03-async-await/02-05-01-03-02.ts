/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.3. async/await
 *                 error handling
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   *
   */

  new Promise(() => {
    throw new Error("ERR01");
  }).catch((e: Error) => {
    console.error(e.message);
  });
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如何处理 async function 中抛出的异常？
   * 直接使用 try/catch 代码块捕获异常，
   */

  async function fn01() {
    throw new Error("ERR02");
  }

  (async () => {
    try {
      await fn01();
    } catch (e) {
      console.error(e.message);
    }
  })();
}
