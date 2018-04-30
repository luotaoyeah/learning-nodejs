/*
 *
 */

/*
 *
 */
console.log("\n-------------------------------------------------- 01");
// 直接使用 new 创建一个新的 Buffer；
const buffer01 = new Buffer(8);
// 全部填充为 0；
buffer01.fill(0);
/* <Buffer 00 00 00 00 00 00 00 00> */
console.log(buffer01);

/*
 *
 */
console.log("\n-------------------------------------------------- 02");
// 创建 Buffer 时，传入初始化的内容；
const buffer02 = new Buffer("hello");
/* <Buffer 68 65 6c 6c 6f> */
console.log(buffer02);
