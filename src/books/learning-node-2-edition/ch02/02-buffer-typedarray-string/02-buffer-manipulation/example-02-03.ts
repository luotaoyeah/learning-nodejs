/*
 * Example 2-3. Demonstrating in-place modification of old buffer when changing new buffer
 */

/*
 * 可以使用 Buffer.slice() 从 buffer 中截取一个新的 buffer，
 * 修改新的 buffer 的内容时，原来的 buffer 也会被修改；
 */
console.log("\n-------------------------------------------------- 01");
const buffer01 = new Buffer("this is the way we build our buffer");

const buffer02 = buffer01.slice(19, buffer01.length);
console.log(buffer02.toString());

buffer02.fill("*", 0, 5);
console.log(buffer02.toString());
console.log(buffer01.toString());

export {};
