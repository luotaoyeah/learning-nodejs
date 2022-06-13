/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.3. Optimized JavaScript
 *             1.4.3.3. String Manipulation
 *                 template literal
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 字符串模板（string template）是一种新的字符串形式
   */

  // 支持字符串拼接
  console.assert(`a${"b"}` === "ab");

  // 支持嵌入表达式
  console.assert(`${2 + 2}` === "4");

  // 支持 multi-line string
  console.assert(
    `a
b` === "a\nb"
  );
}
