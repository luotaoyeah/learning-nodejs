/*
 * Events
 *     Asynchronous vs. Synchronous
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 事件监听函数会按照添加的顺序同步地执行，
   * 可以在监听函数中使用 setImmediate() 和 process.nextTick() 方法，
   * 实现异步调用
   */

  class MyEventEmitter extends EventEmitter {}

  const myEventEmitter = new MyEventEmitter();

  myEventEmitter.on("my-event", () => {
    setImmediate(() => {
      console.log("01");
    });
  });

  myEventEmitter.on("my-event", () => {
    process.nextTick(() => {
      console.log("02");
    });
  });

  myEventEmitter.on("my-event", () => {
    console.log("03");
  });

  myEventEmitter.emit("my-event");
}
