/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.1. setTimtout()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * setTimeout() 方法，用来延迟执行某些任务，
   * 这个延迟的时间，只能保证一定会在这个时间之后执行，
   * 但是具体是在这之后的哪个时刻执行，是否会在这个时间之后立即执行，是不能保证的，
   * 因此，如下的代码，虽然 B 比 A 多延迟一毫秒执行，但是也可能 B 会在 A 之前执行
   */

  setTimeout(() => {
    console.log("A");
  }, 1000);

  setTimeout(() => {
    console.log("B");
  }, 1001);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当多个 setTimeout() 的延迟时间相同时，它们的执行顺序是可以保证的，
   * 因为在底层，相同延时的回调函数是放在同一个 queue 里面的，顺序执行，
   */

  setTimeout(() => {
    console.log("AA");
  }, 1000);
  setTimeout(() => {
    console.log("BB");
  }, 1000);
  setTimeout(() => {
    console.log("CC");
  }, 1000);
}
