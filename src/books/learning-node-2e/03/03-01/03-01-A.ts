/*
 * 3.1 An Overview of the Node Module System
 */

/*
 * node 的很多功能都不是直接跟 node 打包在一起的，而是通过 module 的方式来提供；
 * node 的模块系统采用的是 CommonJS 模块系统；
 * node 的模块系统具有以下特性：
 *     a. 使用 require() 输入一个 module，参数为 module identifier；
 *     b. module identifier 是一个 string，可以包含（/）；
 *     c. 一个 module 必须将'要暴露给外部的内容'显式地进行输出；
 *     d. 在 module 中定义的 variable 只对当前 module 可见；
 *
 * node 的有些功能是全局的，不需要引入，可以直接使用；
 * 而有些功能是以 module 的形式提供，使用前需要先引入；
 */
console.log("\n-------------------------------------------------- 01");

export {};
