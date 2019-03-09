/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.4. Deferred Execution
 *             2.3.4.1. process.nextTick()
 */

import { EventEmitter } from "events";

/*
 * process.nextTick() 方法的使用场景通常是：
 *     为了防止在添加监听函数之前，就已经触发了事件，导致监听函数没有机会执行，
 *     因此将触发事件的代码放到 nextTick() 的回调函数中，
 *     保证先添加了监听函数，再触发了事件
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 下面的代码，会先触发 start 事件，然后再添加事件监听函数
   */
  function createEmitter() {
    const emitter = new EventEmitter();
    emitter.emit("start");
    return emitter;
  }

  const emitter = createEmitter();
  emitter.addListener("start", () => {
    console.log("START01");
  });
}

console.log("\n-------------------------------------------------- 02");
{
  function createEmitter() {
    const emitter = new EventEmitter();
    /*
     * 将触发事件的代码，放到 nextTick() 的回调函数中执行，
     * 保证此时已经完成了监听函数的添加
     */
    process.nextTick(() => {
      emitter.emit("start");
    });
    return emitter;
  }

  const emitter = createEmitter();
  emitter.on("start", () => {
    console.log("START02");
  });
}
