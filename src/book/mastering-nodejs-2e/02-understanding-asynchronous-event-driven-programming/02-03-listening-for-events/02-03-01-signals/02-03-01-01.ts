/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.1. Signals
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * signal 指的是：操作系统给 nodejs 进程（process）发送的某个通知，
   * 因此 node 就可以监听这些 signals 所表示的事件，
   * 比如 SIGINT 事件表示，控制台接收到了终止程序运行的指令（CTRL + C）
   */

  setInterval(() => {}, 1e6);

  process.on("SIGINT", (signal: NodeJS.Signals) => {
    console.log("SIGINT");
  });
}
