/*
 * 2.3.2 Creating an Asynchromous Callback Function
 */

/*
 * Example 2-5. The fundamental structure of the last callback functionality
 */
console.log("\n-------------------------------------------------- 01");
/**
 * fibonaci
 * @param n
 */
function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

/**
 * doSomething() 方法具有下面 4 个特性：
 *     a. 最后一个参数为 callback；
 *     b. 如果方法出错，callback 的第一个参数为该错误对象；
 *     c. 如果方法不出错，callback 的第一个参数为 null；
 *     d. callback 必须在 process.nextTick() 的回调中调用；
 */
class Obj {
  doSomething(num: number | null, callback: (error: Error | null, data?: any) => any): any {
    if (num === null) {
      return callback(new Error("first arg missing or not a number"));
    }

    process.nextTick(() => {
      callback(null, fib(num));
    });
  }
}

const obj = new Obj();
const num: number = 10;
obj.doSomething(num, (err: Error | null, data: any) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`the fibonaci value for ${num} is ${data}`);
  }
});

export {};
