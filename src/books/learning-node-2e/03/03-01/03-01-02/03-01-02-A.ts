/*
 * 3.1.2 Sandboxing and the VM Module
 */

/*
 * 在 JS 中应该尽量避免使用 eval()；
 * 因为 eval() 中的代码跟当前执行的代码处于相同的上下文环境；
 */
console.log("\n-------------------------------------------------- 01");

let name = "foo";
eval("name = 'bar';");
/* bar */
console.log(name);

export {};
