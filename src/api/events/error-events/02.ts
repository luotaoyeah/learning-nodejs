/*
 * Events
 *     Error Events
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  const emitter = new EventEmitter();

  /*
   * 因此，最佳实践是：
   *     始终为 error 事件绑定监听函数
   */
  emitter.on("error", (e: Error) => {
    console.error(`ERR01: ${e.message}`);
  });

  emitter.emit("error", new Error("SOME ERR 01"));
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 或者给 uncaughtException 事件添加监听函数，
   * uncaughtException 事件可以捕获所有未被捕获的错误
   */

  process.on("uncaughtException", (e: Error) => {
    console.error(`ERR02: ${e.message}`);
  });

  const emitter = new EventEmitter();
  emitter.emit("error", new Error("SOME ERR 02"));
}
