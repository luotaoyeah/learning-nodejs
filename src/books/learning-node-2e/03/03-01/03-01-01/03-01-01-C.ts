/*
 * 使用 npm 安装的 module，在加载的时候直接指定 module name 即可；
 */
console.log("\n-------------------------------------------------- 01");
/* / */
console.log(require("path").sep);

/*
 * 使用 npm 安装的 module，node 在加载的时候按照下面的策略来寻找 module 所在的位置；
 *     a. 当前项目下的 node_modules 文件夹；（当前项目指的是 package.json 所在的目录）
 *     b. 上级目录下的 node_modules 文件夹；
 *     c. 以此类推，直到根目录下的 node_modules 文件夹；
 *     d. 全局安装的 node_modules 文件夹；
 *
 * 使用这种策略的原因是：本地安装的 module 优先于全局安装的同名 module；
 */
console.log("\n-------------------------------------------------- 02");

/*
 * 可以使用 require.resolve() 查看某个 module 解析的最终位置；
 */
console.log("\n-------------------------------------------------- 03");
console.log(require.resolve("path"));

export {};
