/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.1. Help with Variables
 *                 const
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * const 用来声明一个常量，声明之后不能再修改值
   */

  const foo = "FOO";
  /*
    foo = "BAR"; // TS2588: Cannot assign to 'foo' because it is a constant.
  */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果将一个对象声明为 const，则它的属性依然可以被修改
   */

  const obj01 = { x: 1, y: 2 };
  console.assert(obj01.x === 1);

  obj01.x = 9;
  console.assert(obj01.x === 9);
}
