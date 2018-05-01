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

/*
 * 可以使用 Buffer.equals() 比较两个 buffer 是否相等；
 */
console.log("\n-------------------------------------------------- 02");
const buffer03 = Buffer.alloc(8);
const buffer04 = Buffer.alloc(8);
/* true */
console.log(buffer03.equals(buffer04));

/*
 * 可以使用 Buffer.copy() 将一个 buffer 的内容复制到另一个 buffer；
 * 如果目标 buffer 的长度不够，来源 buffer 的内容将被截取；
 */
console.log("\n-------------------------------------------------- 03");
const buffer05 = new Buffer("this is a new buffer with a string");
const buffer06 = new Buffer(10);
buffer05.copy(buffer06);
/* this is a */
console.log(buffer06.toString());

export {};
