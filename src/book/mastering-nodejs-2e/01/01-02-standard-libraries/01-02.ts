/*
 * Understanding the Node Environment
 *     Standard libraries
 */

/*
 * nodejs 构建于标准的开源C代码库之上，比如：TLS 和 SSL 协议是使用 OpenSSL 实现的，
 * nodejs 不仅仅是使用了它们的接口，而是直接将它们的源代码编译并打包到 nodejs 里面；
 * 这样做的优点有：
 *     立刻拥有系统程序员需要的功能集合
 *     保证了性能，可靠性，安全性
 *     保证了跨平台的兼容性
 *
 * 其他语言比如 java 使用了其他的方式来实现跨平台：使用 java 重写所有功能
 */
console.log("\n-------------------------------------------------- 01");
