/*
 * Events
 *     EventEmitter
 *         Event: removeListener
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当移除 emitter 对象的某个事件监听函数时，
   * emitter 对象上会触发 removeListener 事件
   */

  const cb = () => {};

  const emitter = new EventEmitter();

  emitter.once("removeListener", (eventName: string, listener: Function) => {
    console.assert(eventName === "foo-event");
    console.assert(listener === cb);
  });

  emitter.on("foo-event", cb);
  emitter.off("foo-event", cb);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * removeListener 事件会在监听函数被移除`之后`触发
   */

  const emitter = new EventEmitter();

  emitter.on("removeListener", () => {
    console.assert(emitter.listenerCount("foo-event") === 0);
  });

  emitter.on("foo-event", () => {});
  emitter.off("foo-event", () => {});
}
