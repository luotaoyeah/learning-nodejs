/*
 * Timers
 *     Scheduling Timers
 *         setInterval()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 setInterval(cb, delay) 方法创建一个 timer 对象，
   * 每间隔指定的一段时间就会执行指定的回调函数，
   * delay 的取值范围为 [1, 2^31 - 1]，如果超出范围，会被自动设置为 1
   *
   * setInterval() 创建的 timer 和 setImmediate() 创建的 timer 的一个区别：
   *     setImmediate() 创建的 timer 的回调函数会在`本次` event loop 的最后面执行，
   *     setInterval() 创建的 timer 的回调函数会在`下次` event loop 执行，
   */

  setInterval(() => {
    console.log("INTERVAL");
  }, 1000);

  setImmediate(() => {
    console.log("IMMEDIATE");
  });

  console.log("END");
}
