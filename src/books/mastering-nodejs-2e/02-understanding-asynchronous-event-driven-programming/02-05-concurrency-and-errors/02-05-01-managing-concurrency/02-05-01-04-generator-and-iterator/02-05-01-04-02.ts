/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.4. Generator and Iterator
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * generator function 可以接受参数
   */

  function* gen01(from: number = 1, to: number = 2): IterableIterator<number> {
    let _from = from;

    do {
      yield _from++;
    } while (_from <= to);
  }

  for (const i of gen01(1, 9)) {
    console.log(i);
  }
}
