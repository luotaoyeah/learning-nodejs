/*
 * Timers
 *     Scheduling Timers
 *         setImmediate()
 *             execute in creation order
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 多个 setImmediate() 的回调函数，会按照顺序依次执行
   */

  setImmediate(() => {
    console.log("A");
  });

  setImmediate(() => {
    console.log("B");
  });

  setImmediate(() => {
    console.log("C");
  });

  console.log("END");
}
