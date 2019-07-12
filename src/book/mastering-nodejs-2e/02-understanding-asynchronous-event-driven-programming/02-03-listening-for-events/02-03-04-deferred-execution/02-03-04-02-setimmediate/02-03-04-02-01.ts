/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.4. Deferred Execution
 *             2.3.4.2. setImmediate()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * setImmediate() 跟 process.nextTick() 类似，区别在于：
   *     process.nextTick() 的回调会在 timers 和 I/O 事件之前执行，
   *     setImmediate() 的回调会在 I/O 事件之后执行，
   */

  console.log("A");

  setTimeout(() => {
    console.log("D");
  }, 0);

  setImmediate(() => {
    console.log("E");
  });

  process.nextTick(() => {
    console.log("C");
  });

  console.log("B");
}
