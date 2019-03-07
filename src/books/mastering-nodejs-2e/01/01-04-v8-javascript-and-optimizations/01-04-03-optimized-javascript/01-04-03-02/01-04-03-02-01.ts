/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.2. Arrow Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 普通函数中的 this 是在函数执行时确定的，可以根据下面的规则来进行判断：
   *     将各种形式的函数调用，都转换为 fn.call() 的形式，
   *     然后其第一个参数就是它的 this 对象
   */

  class Counter {
    count: number = 9;

    constructor() {
      setTimeout(function() {
        // @ts-ignore
        console.assert(this.count === undefined);
      }, 1000);
    }
  }

  new Counter();
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * arrow function 中的 this 是函数在定义时，当前上下文中的 this 对象，
   * arrow function 会对这个 this 对象进行捕获（capture）
   */

  class Counter {
    count: number = 9;

    constructor() {
      setTimeout(() => {
        console.assert(this.count === 9);
      }, 1000);
    }
  }

  new Counter();
}
