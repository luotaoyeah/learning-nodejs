/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.2. setInterval()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * setInterval() 方法，周期性地（每个一段时间）执行某个函数，
   * delay 的取值范围为 [1, 2147483647（2^31 - 1）]，超出范围时，会自动被设为 1，
   * 跟 setTimeout() 类似，每次间隔的时间并不能保证会精确地等于设定好的时间
   */

  let previous = Date.now();

  const timeout = setInterval(
    (interval: string) => {
      console.log(interval, Date.now() - previous);
      previous = Date.now();
    },
    1000,
    "INTERVAL:"
  );
}
