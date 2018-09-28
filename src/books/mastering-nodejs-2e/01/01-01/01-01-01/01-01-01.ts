/*
 * Understanding the Node Environment
 *     Introduction – JavaScript as a systems language
 *         The Unix design philosophy
 */

console.log("\n-------------------------------------------------- 01");

/*
 * UNIX 的设计哲学：一个程序只做一件事，且把它做好；
 * nodejs 的设计中体现了 UNIX 的设计哲学：
 *    优先选择简单性（simplicity）而不是复杂性（complexity）
 *    直接使用熟悉的 POSIX API，而不是设计新的 API
 *    使用事件驱动模式，不使用多线程模式
 *    直接使用已有的C代码库，而不是重新实现一遍
 *    优先使用文本格式，而不是二进制格式
 */
