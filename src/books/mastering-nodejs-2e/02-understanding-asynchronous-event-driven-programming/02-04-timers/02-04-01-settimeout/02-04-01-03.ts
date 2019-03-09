/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.1. setTimtout()
 *             minimum delay
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 延迟时间的最小值为 1，当延时时间设为小于 1 的数字时（比如：0，-1），或者设为非数字时，
   * 会自动将延时设置为 1，
   */

  console.log("FOO");

  const start = Date.now();

  setTimeout(() => {
    console.log("A", Date.now() - start);
  }, -1);
  setTimeout(() => {
    console.log("B", Date.now() - start);
  }, 0);
  setTimeout(() => {
    console.log("C", Date.now() - start);
  }, 1);

  console.log("BAR");
}
