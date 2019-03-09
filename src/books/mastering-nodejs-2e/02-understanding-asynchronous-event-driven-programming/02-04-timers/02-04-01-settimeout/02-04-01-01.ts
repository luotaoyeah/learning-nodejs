/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.1. setTimtout()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 关于 timers 需要记住的是：
   *     1. 只能保证会在指定的时间之后执行，不能保证一定会精确地刚好在指定的时间之后执行，
   *        比如，如果前面的任务比较耗时，则会比指定的时间还要延后，
   *     2. 不能保证回调函数执行的顺序，比如同样延迟一秒执行，可能后面定义的回调函数会先执行，
   */

  const before = new Date().getTime();

  setTimeout(() => {
    const elapse = new Date().getTime() - before;
    // elapsed 一定会大于或者等于 1000
    console.log(elapse);
  }, 1000);
}
