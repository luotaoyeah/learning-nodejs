/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.3. unref() and ref()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ref() 方法的作用跟 unref() 相反
   */

  const interval = setInterval(() => {
    console.log("FOO");
  }, 1000);

  setTimeout(() => {
    interval.unref();
    interval.ref();
  }, 5000);
}
