/*
 * process.env 属性
 *
 * 获取当前的用户环境变量；
 */

console.log("\n-------------------------------------------------- 01");
console.log(JSON.stringify(process.env, null, 2));

/*
 * 可以修改 process.env 的属性值；
 */
console.log("\n-------------------------------------------------- 02");
process.env.FOO = "foo";
console.log(process.env.FOO);

/*
 * 设置属性值时，会自动转换为字符串；
 */
console.log("\n-------------------------------------------------- 03");
process.env.FOO = undefined;
/* true */
console.log(process.env.FOO === "undefined");

/*
 * 可以使用 delete 删除属性；
 */
console.log("\n-------------------------------------------------- 04");
delete process.env.FOO;
/* true */
console.log(process.env.FOO === undefined);
