/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.2. Errors and Exceptions
 */

/*
 * error 和 exception 的区别：
 *     error 是非致命的（non-fatal），预料之内的（expected），
 *     应该被捕获的（caught），应该被处理（handle）的错误，
 * nodejs 中常见的 error 有下面四种情况：
 */
console.log("\n-------------------------------------------------- 01");
{
  /*
   * synchronous context
   * 比如函数参数不满足要求，直接 throw 一个 error 对象
   */

  function fn01(x: number, y: number): number {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error("NOT INTEGER");
    }

    return x * y;
  }

  console.assert(fn01(9, 9) === 81);
  try {
    console.assert(fn01(9.9, 9.9) === 98.01);
  } catch (e) {
    console.error(`ERR01: ${e.message}`);
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * asynchronous context
   * 当调用 callback 的代码中需要抛出错误时，
   * 应该将一个 error 对象作为 callback 的第一个参数，
   */

  function fn01(x: number, y: number, cb: (e: NodeJS.ErrnoException | null | null, data?: number) => void) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      cb(new Error("NOT INTEGER"));
    } else {
      cb(null, x * y);
    }
  }

  const cb = (e: NodeJS.ErrnoException | null | null, data?: number) => {
    if (e) {
      console.error(`ERR02: ${e.message}`);
      return;
    }

    console.log(data);
  };

  fn01(9, 9, cb);
  fn01(9.9, 9.9, cb);
}
