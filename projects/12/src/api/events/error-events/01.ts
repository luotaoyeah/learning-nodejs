/*
 * Events
 *     Error Events
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 nodejs 中，error 事件是一个特殊的事件，
   * 如果一个 emitter 对象触发了一个 error 事件，但是却没有绑定 error 事件的监听函数，
   * 则 nodejs 会打印这个错误的堆栈信息，并退出
   */

  const emitter = new EventEmitter();
  emitter.emit("error", new Error("SOME ERR"));
}
