/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.3. String Manipulation
 *                 String.prototype.repeat()
 *                 String.prototype.startsWith()
 *                 String.prototype.endsWith()
 *                 String.prototype.includes()
 */

console.log("\n-------------------------------------------------- 01");
{
  console.assert("A".repeat(3) === "AAA");
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * string 是一个 iterable 对象，可以使用 for/of 循环
   */

  for (const c of "AAA") {
    console.assert(c === "A");
  }
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * string 支持 spread operator
   */

  console.assert([..."FOO"].toString() === "F,O,O");
}

console.log("\n-------------------------------------------------- 04");
{
  /*
   *
   */

  console.assert("BAR".includes("R") === true);
  console.assert("BAR".startsWith("A", 1) === true);
  console.assert("BAR".endsWith("B", 1) === true);
}
