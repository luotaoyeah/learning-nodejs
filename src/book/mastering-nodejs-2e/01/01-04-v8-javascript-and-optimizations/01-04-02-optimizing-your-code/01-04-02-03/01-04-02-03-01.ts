/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.2. Optimizing your code
 *             1.4.2.3. Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 包含 try/catch 的 function 不能被优化
   */

  function fn01() {
    try {
      JSON.parse("");
    } catch {
      console.error("PARSE ERROR");
    }
  }

  fn01();
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 包含 with 语句的 function 不能被优化
   */

  function fn01() {
    const obj01 = { x: 1, y: 2 };

    /*
        // @ts-ignore
        with (obj01) {
          console.log(x);
        }
    */
  }

  fn01();
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 包含 eval 语句的 function 不能被优化
   */

  eval("console.log('EVAL')");
}
