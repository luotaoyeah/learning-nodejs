/*
 * Timers
 *     Scheduling Timers
 *         setTimeout()
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 setTimeout(cb, delay) 方法创建一个 timer 对象，
   * delay 毫秒之后，回调函数会被执行
   *
   * 注意：nodejs 会保证回调函数至少会在 delay 毫秒之后执行，
   * 但是具体的执行时刻，以及多个回调函数的执行顺序是不能被保证的，
   * 但是对于相同的 delay 的多个回调函数，是可以保证执行顺序的，
   * 因为它们是存储在一个 queue 中的
   */

  /*
   * 如下，因为 A 跟 B 的 delay 都是 1000，因此 A 一定在 B 之前执行，
   * 但是它们跟 C 和 D 之间的先后顺序是无法确定的
   */

  const start = Date.now();

  setTimeout(() => {
    console.log(`A: ${Date.now() - start}`);
  }, 1001);

  setTimeout(() => {
    console.log(`B: ${Date.now() - start}`);
  }, 1001);

  setTimeout(() => {
    console.log(`C: ${Date.now() - start}`);
  }, 1000);

  setTimeout(() => {
    console.log(`D: ${Date.now() - start}`);
  }, 1002);
}
