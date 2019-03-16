/*
 * Timers
 *     Cancelling Timers
 *         clearInterval()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以使用 clearInterval() 方法，取消某个使用 setInterval() 方法创建的 timer 对象
   */

  const interval: NodeJS.Timeout = setInterval(() => {
    console.log(Date.now());
  }, 1000);

  setTimeout(() => {
    if (interval) {
      clearInterval(interval);
    }
  }, 3000);
}
