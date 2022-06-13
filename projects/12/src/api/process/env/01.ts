/*
 * process.env 属性
 * 获取当前用户的环境变量
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 环境变量的值都是字符串类型
   */
  console.assert(process.env.NUMBER_OF_PROCESSORS === "8");
  console.assert(process.env.FOO === undefined);
}
