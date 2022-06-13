/*
 * 3.1.1 How Node Finds and Loads a Module
 */

/*
 * 使用 require 引入一个 module；
 */
console.log("\n-------------------------------------------------- 01");
const http = require("http");
/* GET */
console.log(http.METHODS[6]);

/*
 * 可以只获取输出对象的某一个 property；
 */
console.log("\n-------------------------------------------------- 02");
const parse = require("url").parse;
/* https: */
console.log(parse("https://www.github.com").protocol);

export {};
