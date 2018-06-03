/*
 * 当引入一个 module 时，node 会执行下面的操作：
 *     a. 检查该 module 是否被缓存；module 在第一次被请求之后就会被缓存；
 *     b. 如果没有缓存，则检查是否是 native module；
 *         1. 如果是 native module，则有专门的一个 function 用来加载并返回该 module；
 *         2. 如果不是 native module，会创建一个新的 module object，且 module 的 exports property 会被返回；
 *         3. 缓存该 module；
 *
 * TODO 待验证
 * 如果要清除对某个 module 的缓存，可以使用 delete；
 */
console.log("\n-------------------------------------------------- 01");
const http = require("http");
/*
  delete require("http");
*/

/*
 * node 在加载 module 的时候，首先需要解析 module 所在的位置；
 * 如果一个 local module 和 core module 同名，则 core module 具有更高的优先级，
 * 此时需要通过 local module 的路径来跟同名的 core module 进行区分；
 */
console.log("\n-------------------------------------------------- 02");
const http02 = require("http");

const http03 = require("./http.ts");
/* { name: 'tom', age: 18 } */
console.log(http03);

/*
 * 使用 require() 加载 module 的时候，module name 可以包含后缀，也可以省略后缀；
 * 当省略后缀时：
 *     node 首先寻找后缀为 .js 的文件；
 *     如果没找到，则寻找后缀为 .json 的文件；
 *     如果没找到，则寻找后缀为 .node 的文件；
 *
 * （注：TS 中的 module 解析策略跟 node 有一定区别）
 */
console.log("\n-------------------------------------------------- 03");
/* { name: 'tom', age: 18 } */
console.log(require("./http"));
console.log(require("./data.json"));

export {};
