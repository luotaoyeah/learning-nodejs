/*
 * 可以读写一个 buffer 指定位置的内容；
 */
console.log("\n-------------------------------------------------- 01");
const buffer01 = new Buffer(4);
buffer01.writeUInt8(0x63, 0);
buffer01.writeUInt8(0x61, 1);
buffer01.writeUInt8(0x74, 2);
buffer01.writeUInt8(0x73, 3);
/* cats */
console.log(buffer01.toString());

/*
 * 可以使用类数组的方式，将 8 位整数写入 buffer；
 */
console.log("\n-------------------------------------------------- 02");
const buffer02 = new Buffer(4);
buffer02[0] = 0x63;
buffer02[1] = 0x61;
buffer02[2] = 0x74;
buffer02[3] = 0x73;
/* cats */
console.log(buffer02.toString());

/*
 * 可以使用 Buffer.equals() 比较两个 buffer 是否相等；
 */
console.log("\n-------------------------------------------------- 03");
const buffer03 = Buffer.alloc(8);
const buffer04 = Buffer.alloc(8);
/* true */
console.log(buffer03.equals(buffer04));

/*
 * 可以使用 Buffer.copy() 将一个 buffer 的内容复制到另一个 buffer；
 * 如果目标 buffer 的长度不够，来源 buffer 的内容将被截取；
 */
console.log("\n-------------------------------------------------- 04");
const buffer05 = new Buffer("this is a new buffer with a string");
const buffer06 = new Buffer(10);
buffer05.copy(buffer06);
/* this is a */
console.log(buffer06.toString());

/*
 * 可以使用 Buffer.compare() 比较两个 buffer 的顺序；
 */
console.log("\n-------------------------------------------------- 05");
const buffer07 = new Buffer("a");
const buffer08 = new Buffer("b");
const buffer09 = new Buffer(buffer07.length);
buffer07.copy(buffer09);

/* -1 */
console.log(buffer07.compare(buffer08));
/* 1 */
console.log(buffer08.compare(buffer09));
/* 0 */
console.log(buffer07.compare(buffer09));

export {};
