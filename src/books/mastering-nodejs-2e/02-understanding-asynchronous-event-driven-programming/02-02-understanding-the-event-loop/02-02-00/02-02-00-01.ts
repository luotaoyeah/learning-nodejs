/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.2. Understanding the Event Loop
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 关于 event loop 有三个要点：
   *     1. event loop 跟用户代码是运行在同一个线程上的，
   *     2. 当一个 node 进程启动之后，event loop 就会被创建并开始运作，
   *     3. event loop 会将很多 I/O 操作委托给 libuv 去执行，
   *        libuv 可以直接跟操作系统进行交互，比如使用 thread pool，
   *        然后会将执行结果通知给 event loop，
   *        这样可以利用到多线程（multi-threading）的高效性
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如下的程序，while 循环会一直执行，
   * 按照期望，10 毫秒之后，会执行 setTimeout() 的回调函数，即将 stop 设置为 true，
   * 但实际上 while 循环一直在执行，setTimeout() 的回调函数就不会获得执行的机会，
   * 这也简介证明了 event loop 的存在，以及 event loop 跟用户代码是运行在同一个线程上的
   */

  let stop: boolean = false;
  let i: number = 0;

  setTimeout(() => {
    stop = true;
  }, 10);

  while (!stop) {
    console.log(i++);
  }
}
