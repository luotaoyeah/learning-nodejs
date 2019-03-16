/*
 * Events
 *     EventEmitter
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  const emitter = new EventEmitter();

  emitter.on("newListener", (event: string, listener: Function) => {
    console.log(`newListener: ${event}`);
  });

  emitter.on("removeListener", (event: string, listener: Function) => {
    console.log(`removeListener: ${event}`);
  });

  /*
   * 当添加监听函数时，会触发 newListener 事件
   */
  emitter.on("foo", () => {});
  emitter.on("bar", () => {});

  /*
   * 当移除监听函数时，会触发 removeListener 事件
   */
  emitter.removeAllListeners("foo");
  emitter.removeAllListeners("bar");
}
