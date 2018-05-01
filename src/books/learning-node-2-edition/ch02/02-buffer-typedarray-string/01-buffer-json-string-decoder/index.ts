import { StringDecoder } from "string_decoder";
/*
 * StringDecoder 的作用是：将 buffer 转换为 string；
 * StringDecoder 和 Buffer.toString() 的区别是：
 *     对于一段不完整的字符序列，
 *         Buffer.toString() 会直接输出乱码；
 *         StringDecoder 会缓存起来直到序列完整，然后返回结果；
 */

const stringDecoder = new StringDecoder("utf8");
const buffer01 = new Buffer([0xe2, 0x82]);
const buffer02 = new Buffer([0xac]);

console.log("\n-------------------------------------------------- 01");
console.log(stringDecoder.write(buffer01));
console.log(stringDecoder.write(buffer02));

console.log("\n-------------------------------------------------- 02");
console.log(buffer01.toString());
console.log(buffer02.toString());

/*
 * 可以使用 Buffer.write() 将 string 写入 buffer，
 * 但是要保证 buffer 的大小，使得 string 能够完整地被写入；
 */
console.log("\n-------------------------------------------------- 03");
const buffer03 = new Buffer(3);
buffer03.write("€");
console.log(buffer03.toString());

/*
 * 字符串中字符的数量跟存放该字符串的 buffer 的长度有可能是不一致的；
 */
console.log("\n-------------------------------------------------- 04");
/* 1 */
console.log("€".length);
/* 3 */
console.log(new Buffer("€").length);

export {};
