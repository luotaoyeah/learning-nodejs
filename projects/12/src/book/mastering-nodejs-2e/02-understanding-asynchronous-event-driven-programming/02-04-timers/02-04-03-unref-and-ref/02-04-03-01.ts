/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.3. unref() and ref()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 默认情况下，当 timers 的回调函数尚未执行完毕时（即 callback queue 中仍然存在 timers 的 callback），
   * nodejs 的 process 不会终止，
   * 如下，因为回调函数周期执行，process 永远不会终止，
   */

  const interval = setInterval(() => {
    console.log("FOO");
  }, 1000);

  setTimeout(() => {
    /*
     * 如果想让 process 不关心该 timer 的 callback 是否尚未执行完毕，
     * 即，只要没有其他任务了，process 就可以终止，
     * 此时可以调用该 timer 对象的 unref() 方法
     */
    interval.unref();
  }, 5000);
}
