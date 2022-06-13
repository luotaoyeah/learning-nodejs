/*
 * Understanding the Node Environment
 *     Introduction – JavaScript as a systems language
 *         Events for everything
 */

/*
 * 在应用程序中，有些操作是很慢的，有些操作是很不可靠的，
 * 对于此类问题，其他编程语言的解决方案是：使用多线程，
 * 而 nodejs 使用的是事件，在 nodejs 中只有一个线程，
 * 绑定到事件循环（event loop）上；
 * 避免了多线程造成的性能和可靠性方面的一些问题；
 */
console.log("\n-------------------------------------------------- 01");
