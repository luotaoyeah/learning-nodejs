/*
 * process.env 属性
 *     delete
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以使用 delete 删除 process.env 对象上的属性
   */

  process.env.FOO = "FOO";
  console.assert(process.env.FOO === "FOO");

  delete process.env.FOO;
  console.assert(process.env.FOO === undefined);
}
