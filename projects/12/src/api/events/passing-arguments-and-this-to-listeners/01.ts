/*
 * Events
 *     Passing Arguments and `this` to Listeners
 *         extra args
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  class MyEmitter extends EventEmitter {}

  const myEmitter = new MyEmitter();

  myEmitter.on("my-event", (foo: string, bar: string) => {
    console.log("MY-EVENT");
    console.assert(foo === "FOO");
    console.assert(bar === "BAR");
  });

  /*
   * 调用 EventEmitter.emit() 方法触发某个事件时，
   * 可以传递额外的参数，这些参数会传递给该事件所有的监听函数
   */
  myEmitter.emit("my-event", "FOO", "BAR");
}
