/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.2. Errors and Exceptions
 *             uncaughtException
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * exception 通常是 fatal，unexpected 错误，通常使用 try/catch 来捕获和处理
   */

  try {
    JSON.parse("");
  } catch (e) {
    console.error("PARSE ERR:", e.message);
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果一个 exception 没有被捕获，并且一直传递到了 event loop，这个 exception 通常称之为 uncaught exception，
   * 我们可以监听 process 的 uncaughtException 事件，处理所有的 uncaught exceptions
   */

  process.on("uncaughtException", (e: Error) => {
    console.error("UNCAUGHT EXCEPTION:", e.message);
  });

  setTimeout(() => {
    /*
     * 由于下面抛出的 error 被 uncaughtException 事件捕获了，
     * 因此 process 不会退出，可以继续执行
     */
    console.log("FOO");
  }, 1000);

  throw new Error("ERR02");
}
