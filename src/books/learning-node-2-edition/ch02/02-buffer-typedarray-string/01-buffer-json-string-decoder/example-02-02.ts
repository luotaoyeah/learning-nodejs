/*
 * Example 2-2. A string to buer to JSON, and back to buer and back to string
 */

console.log("\n-------------------------------------------------- 01");
const str01: string = "tom";
const buffer01: Buffer = new Buffer(str01);
const json01: string = JSON.stringify(buffer01);
/* {"type":"Buffer","data":[116,111,109]} */
console.log(json01);
const buffer02: Buffer = new Buffer(JSON.parse(json01).data);
/* tom */
console.log(buffer02.toString());

/*
 * 指定 Buffer.toString() 的编码；
 */
console.log("\n-------------------------------------------------- 02");
/* tom */
console.log(buffer02.toString("ascii"));

/*
 * 指定 Buffer.toString() 的起止索引；
 */
console.log("\n-------------------------------------------------- 03");
/* o */
console.log(buffer02.toString("ascii", 1, 2));
