/*
 * Timers
 *     Scheduling Timers
 *         setImmediate()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 通过 setImmediate() 方法创建一个 timer 对象，
   * 它的回调函数会在`本次` event loop 的最后面执行，
   * 并且是在 I/O callback 之后执行
   */

  setImmediate(() => {
    console.log("IMMEDIATE");
  });

  console.log("END");
}
