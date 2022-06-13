/*
 * 2.3 Node's Callback and Asynchronous Event Handling
 */

/*
 * JS 是 single-thread 的，因此是 synchronous 的；
 * 在遇到耗时的操作时，会造成程序 blocking，解决方法是 event loop；
 */

/*
 * 2.3.1 The Event Loop
 */

/*
 * 要实现 asynchronous 有两种方式：
 *     一是使用 multi-thread，让代码并行执行，
 *     缺点是代价高，且增加程序的复杂度；
 *
 *     二是使用 event-driven architecture，
 *     耗时的操作会添加一个 event 到 event loop 中，其他代码可以监听这个 event，
 *     当耗时的操作执行完成时，会触发该 event，其他监听了该 event 的代码就可以被通知到；
 *
 * nodejs 中的 event loop 主要用来处理 IO，例如：
 *     打开一个文件，读取文件内容，等待用户请求；
 *     这些操作不仅耗时，通常也会出现资源竞争的情况；
 *
 * nodejs 按照顺序处理 event loop 中的事件，并分别调用注册的 callback function；
 */
console.log("\n-------------------------------------------------- 01");

export {};
