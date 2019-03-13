/*
 * process.env 属性
 *     case-insensitive on windows
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 windows 平台上，process.env 对象的属性是不区分大小写的（case-insensitive）
   */

  process.env.FOO = "FOO";
  console.assert(process.env.foo === "FOO");
}
