/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.1. Help with Variables
 *                 spread operator
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * spread operator 跟 rest operator（destructuring） 是相反的操作
   */

  const arr01 = [1, 2, 3];
  const arr02 = [4, 5, 6];
  console.assert([...arr01, ...arr02].toString() === "1,2,3,4,5,6");

  const obj01 = { x: 1 };
  const obj02 = { y: 2 };
  console.assert(JSON.stringify({ ...obj01, ...obj02 }) === '{"x":1,"y":2}');
}
