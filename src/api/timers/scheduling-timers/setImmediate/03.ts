/*
 * Timers
 *     Scheduling Timers
 *         setImmediate()
 *             call setImmediate() within callback
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果在 setImmediate() 的回调函数中调用 setImmediate() 创建了新的 timer 对象，
   * 则这个新的 timer 对象的回调函数会在下一次的 event loop 中执行
   */

  setImmediate(() => {
    console.log("A");

    setImmediate(() => {
      console.log("D");
    });
  });

  setImmediate(() => {
    console.log("B");
  });

  setImmediate(() => {
    console.log("C");
  });

  console.log("END");
}
