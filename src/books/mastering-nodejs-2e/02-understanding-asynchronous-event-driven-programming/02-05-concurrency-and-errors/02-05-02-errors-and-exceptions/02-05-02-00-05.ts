/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.2. Errors and Exceptions
 *             uncaughtException
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * EventEmitter 触发的 error 事件，如果没有绑定监听函数，
   * 则也会被 process 的 uncaughtException 事件捕获到
   */

  process.on("uncaughtException", (e: Error) => {
    console.error(`UNCAUGHT: ${e.message}`);
  });

  const emitter = new EventEmitter();
  emitter.emit("error", new Error("ERR01"));
}
