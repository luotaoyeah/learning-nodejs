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

export {};
