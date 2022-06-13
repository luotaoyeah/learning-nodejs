/*
 * Events
 *     Passing Arguments and `this` to Listeners
 *         this
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  class MyEmitter extends EventEmitter {}

  const myEmitter = new MyEmitter();

  /*
   * 当监听函数是一个普通函数时，监听函数中的 this 指向 emitter 对象
   */
  myEmitter.on("my-event", function(this: MyEmitter) {
    console.log("MY-EVENT: 01");
    console.assert(this === myEmitter);
  });

  /*
   * 当监听函数是一个箭头函数时，监听函数中的 this 指向 global 对象，
   * 在严格模式（strict mode）下，this 的值为 undefined
   */
  myEmitter.on("my-event", () => {
    console.log("MY-EVENT: 02");
    // @ts-ignore
    console.assert(this === undefined);
  });

  myEmitter.emit("my-event");
}
