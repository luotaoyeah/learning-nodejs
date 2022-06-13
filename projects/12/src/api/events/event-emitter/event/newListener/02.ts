/*
 * Events
 *     EventEmitter
 *         Event: newListener
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * newListener 事件，会在监听函数真正地被添加成功`之前`触发
   */

  const emitter = new EventEmitter();

  emitter.on("newListener", () => {
    console.assert(emitter.listenerCount("foo-event") === 0);
    setImmediate(() => {
      console.assert(emitter.listenerCount("foo-event") === 1);
    });
  });

  emitter.on("foo-event", () => {});
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 因为会先触发 newListener 事件，再添加监听函数，
   * 因此，如果再 newListener 事件的监听函数中，再添加一个该事件的监听函数，
   * 则这个新添加的监听函数，会被添加到本来要被添加的监听函数的前面
   */

  const cb01 = () => {
    console.log("A");
  };
  const cb02 = () => {
    console.log("B");
  };

  const emitter = new EventEmitter();

  emitter.once("newListener", (eventName: string) => {
    if (eventName === "foo-event") {
      emitter.on("foo-event", cb02);
    }
  });

  emitter.on("foo-event", cb01);

  emitter.emit("foo-event");

  setImmediate(() => {
    const listeners = emitter.listeners("foo-event");
    console.assert(listeners[0] === cb02);
    console.assert(listeners[1] === cb01);
  });
}
