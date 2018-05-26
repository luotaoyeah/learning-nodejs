/*
 * setImmediate()：
 *     创建一个 event，
 *         a. 其优先级高于任何 setTimeout() 和 setInterval() 创建的 event，但是其优先级低于 IO events；
 *         b. 不会返回一个 timer 对象；
 */

/* setImmediate() 创建的 event，会在当前 event loop 中的所有的 IO events 之后，
 * 所有的 timer events 之前执行；
 */
console.log("\n-------------------------------------------------- 01");
/*
 * setImmediate01()
 * setTimeout01()
 */
setTimeout(() => {
  console.log("setTimeout01()");
});
setImmediate(() => {
  console.log("setImmediate01()");
});

/*
 * 如果 setImmediate() 是在某个 event 的 callback 中创建的，
 * 则会在下一个 event loop 中执行；
 */
console.log("\n-------------------------------------------------- 02");
/*
 * setTimeout02()
 * setImmediate02()
 */
setTimeout(() => {
  setImmediate(() => {
    console.log("setImmediate02()");
  });
  console.log("setTimeout02()");
});

/*
 * setImmediate() 和 process.nextTick() 的区别是：
 *     process.nextTick() 在当前 event loop 执行完后立即执行；
 *     setImmediate()  在当前 event loop 中所有 IO events 之后，所有 timer events 之前执行；
 */
console.log("\n-------------------------------------------------- 03");

export {};
