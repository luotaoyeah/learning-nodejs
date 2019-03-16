/*
 * Events
 *     EventEmitter
 *         Event: newListener
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当给 emitter 对象的某个事件添加监听函数时，
   * emitter 对象上会触发 newListener 事件，
   * newListener 事件的监听函数会被传递两个参数：
   *     eventName    事件名称
   *     listener     事件监听函数
   */

  const emitter = new EventEmitter();

  emitter.on("newListener", (eventName: string, listener: Function) => {
    console.log("newListener");
    console.assert(listener === cb);
    console.assert(eventName === "foo-event");
  });

  const cb = () => {};
  emitter.on("foo-event", cb);
}
