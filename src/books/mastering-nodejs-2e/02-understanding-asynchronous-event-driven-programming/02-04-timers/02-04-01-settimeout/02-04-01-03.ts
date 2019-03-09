/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.1. setTimeout()
 *             minimum/maximum delay
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 延迟时间的取值范围为 [1, 2147483647（2^31-1） ]，
   * 当超出这个范围时，会自动被设置为 1
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
