/*
 * 如果 module identifier 是一个 folder，
 *     则 node 会寻找该 folder 下面的 package.json 的 main 属性指向的 module；
 */
console.log("\n-------------------------------------------------- 01");
/* { name: 'foo' } */
console.log(require("./folder-01"));

/*
 * 如果 folder 下面没有 package.json，则寻找 index.js；
 */
console.log("\n-------------------------------------------------- 02");
/* { name: 'bar' } */
console.log(require("./folder-02"));

export {};
