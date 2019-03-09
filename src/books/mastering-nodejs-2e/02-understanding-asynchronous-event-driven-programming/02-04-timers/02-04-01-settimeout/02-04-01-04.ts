/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.1. setTimeout()
 *             clearTimeout()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * clearTimeout() 方法，用来取消一个尚未执行的延时任务
   */

  /*
   * 跟浏览器不一样，
   * nodejs 中 setTimeout() 返回的是一个 NodeJS.Timeout 对象，
   * 而浏览器中 setTimeout() 返回的是一个 number，
   */
  const timeout01: NodeJS.Timeout = setTimeout(() => {
    console.log("A");
  }, 1000);

  setTimeout(() => {
    console.log("B");
  }, 1000);

  clearTimeout(timeout01);
}
