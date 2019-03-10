/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.2. Promises
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * callback 风格的代码存在很多问题：
   *     必须遵循约定好的格式，
   *     当很多层 callback 嵌套时，可读性很差，
   *     对错误的处理不够优雅，
   * promise 的出现就是为了解决 callback 的这些问题
   */

  /*
   * promise 可以写成链式调用的风格，多个 then() 方法链接起来
   */
  new Promise(
    (resolve: (value?: any) => void, reject: (reason?: any) => void) => {
      setTimeout(() => {
        resolve("FOO");
      }, 1000);
    }
  )
    .then((data?: any) => {
      console.log(data, new Date().toISOString());

      return new Promise(
        (resolve: (value?: any) => void, reject: () => void) => {
          setTimeout(() => {
            resolve("BAR");
          }, 1000);
        }
      );
    })
    .then((data?: any) => {
      console.log(data, new Date().toISOString());
    });
}
