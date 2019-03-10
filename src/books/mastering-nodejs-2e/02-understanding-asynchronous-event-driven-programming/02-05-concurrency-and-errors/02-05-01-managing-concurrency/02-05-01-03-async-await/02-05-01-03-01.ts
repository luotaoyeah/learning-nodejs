/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.3. async/await
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * async/await 可以实现：使用同步的方式编写异步的代码，比起 promise 更加优雅
   */

  function fn01() {
    return new Promise((resolve: (data: string) => void) => {
      setTimeout(() => {
        resolve("FOO");
      }, 1000);
    });
  }

  function fn02() {
    return new Promise((resolve: (data: string) => void) => {
      setTimeout(() => {
        resolve("BAR");
      }, 2000);
    });
  }

  async function test01() {
    const foo = await fn01();
    const bar = await fn02();

    return [foo, bar];
  }

  async function test02() {
    return Promise.all([fn01(), fn02()]);
  }

  const start = Date.now();

  test01().then((datas: Array<string>) => {
    console.log("01:", datas, Date.now() - start);
  });

  test02().then((datas: Array<string>) => {
    console.log("02:", datas, Date.now() - start);
  });
}
