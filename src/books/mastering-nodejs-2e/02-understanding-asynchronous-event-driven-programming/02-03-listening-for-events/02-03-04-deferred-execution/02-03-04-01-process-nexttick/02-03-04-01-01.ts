/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.4. Deferred Execution
 *             2.3.4.1. process.nextTick()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * process.nextTick() 方法，会将回调函数放入 next tick queue 中，
   * 在本次 event loop 的代码执行完之后，就会立即执行，
   * 它们的执行时期，是在所有 timers（setTimeout，setInterval） 和 I/O 事件之前，
   */
  console.log("A");

  setTimeout(() => {
    console.log("E");
  }, 0);

  process.nextTick(() => {
    console.log("C");
  });

  process.nextTick(() => {
    console.log("D");
  });

  setTimeout(() => {
    console.log("F");
  }, 0);

  console.log("B");
}
