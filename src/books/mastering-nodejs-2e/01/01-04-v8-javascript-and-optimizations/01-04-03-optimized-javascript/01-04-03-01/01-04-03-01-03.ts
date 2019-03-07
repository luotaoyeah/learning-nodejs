/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.1. Help with Variables
 *                 destructuring
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * array 支持 destructuring（解构）
   */

  const [a, , c, , ...e] = [1, 2, 3, 4, 5, 6, 7];
  console.assert(c === 3);
  console.assert(e.toString() === "5,6,7");
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * object 也支持 destructuring（解构）
   */

  const { x, ...y }: any = { x: 1, y: 2, z: 3 };
  console.assert(x === 1);
  console.assert(JSON.stringify(y) === '{"y":2,"z":3}');
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 使用 object destructuring 可以将 arguments 对象转换为 array
   */

  (function(...args: Array<any>) {
    console.assert(args.toString() === "1,2,3");

    // 在 object destructure 出现之前，通常使用下面的方式，将 arguments 转换为 array
    console.assert(
      Array.prototype.slice.call(arguments, 0).toString() === "1,2,3"
    );
    console.assert(Array.from(arguments).toString() === "1,2,3");
  })(1, 2, 3);
}
