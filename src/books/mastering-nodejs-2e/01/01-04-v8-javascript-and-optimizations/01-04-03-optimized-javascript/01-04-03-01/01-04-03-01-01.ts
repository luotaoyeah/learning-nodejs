/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.1. Help with Variables
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 优化建议：使用 let，const 替换 var 来声明变量，
   * let 和 const 支持块级作用域，不会造成变量提升（hoist），能够更好地支持优化
   */

  {
    var foo = "bar";
    if (foo === "bar") {
      var foo = "baz";
      console.assert(foo === "baz");
    }

    console.assert(foo === "baz");
  }

  {
    let foo = "bar";
    if (foo === "bar") {
      let foo = "baz";
      console.assert(foo === "baz");
    }

    console.assert(foo === "bar");
  }
}
