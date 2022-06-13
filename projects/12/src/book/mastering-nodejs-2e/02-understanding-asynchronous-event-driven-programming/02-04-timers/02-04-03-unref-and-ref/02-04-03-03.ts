/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.4. Timers
 *         2.4.3. unref() and ref()
 */

import * as fs from "fs";
import { EventEmitter } from "events";

/*
 * 如下是一个关于 event loop 相关概念的一个示例
 */
console.log("\n-------------------------------------------------- 01");
{
  console.log("1");

  const emitter = new EventEmitter();
  emitter.on("message", () => {
    console.log("2");
  });

  process.nextTick(() => {
    console.log("4");
  });

  setTimeout(() => {
    console.log("5");
  }, 0);
  setTimeout(() => {
    console.log("9");
  }, 10);
  setImmediate(() => {
    console.log("6");
  });

  /*
   * 通过 emit() 方法触发一个事件，
   * 会立即（synchronous）执行该事件对应的回调函数队列
   */
  emitter.emit("message");

  fs.stat(__filename, () => {
    console.log("7");
  });
  fs.stat(__filename, () => {
    console.log("8");
  });

  console.log("3");
}
