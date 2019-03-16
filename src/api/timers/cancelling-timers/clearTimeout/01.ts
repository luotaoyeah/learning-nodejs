/*
 * Timers
 *     Cancelling Timers
 *         clearTimeout()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以使用 clearTimeout() 方法，取消某个使用 setTimeout() 方法创建的 timer 对象
   */

  const timeout: NodeJS.Timeout = setTimeout(() => {
    console.log("TIMEOUT");
  }, 2000);

  setTimeout(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }, 1000);
}
