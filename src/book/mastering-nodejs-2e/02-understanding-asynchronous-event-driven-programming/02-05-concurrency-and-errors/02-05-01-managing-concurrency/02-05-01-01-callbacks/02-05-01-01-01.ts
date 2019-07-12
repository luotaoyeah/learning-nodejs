/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.1. Callbacks
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * nodejs 中的 callback 需要遵循一定的规则：
   *     1. callback 应该是函数的最后一个参数，
   *     2. callback 的第一个参数应该是一个 error 对象，
   */

  function fn01(
    x: number,
    y: number,
    /*
     * 回调函数作为函数的最后一个参数，
     * 回调函数的第一个参数为 error 对象，可以为 null
     */
    cb: (e: NodeJS.ErrnoException | null | null, data?: any) => void
  ) {
    if (x > y) {
      cb(new Error("ERROR: x > y"));
    } else {
      cb(null, x - y);
    }
  }

  const cb = (e: NodeJS.ErrnoException | null | null, data?: string) => {
    if (e) {
      console.error(e.message);
      return;
    }

    console.log(data);
  };

  fn01(1, 2, cb);
  fn01(3, 2, cb);
}
