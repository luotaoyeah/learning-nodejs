/*
 * Timers
 *     Cancelling Timers
 *         clearImmediate()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以使用 clearImmediate() 方法，取消某个使用 setImmediate() 方法创建的 timer 对象
   */

  const immediate: NodeJS.Immediate = setImmediate(() => {
    console.log("IMMEDIATE");
  });

  clearImmediate(immediate);

  console.log("END");
}
