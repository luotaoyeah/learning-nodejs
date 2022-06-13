/*
 * Events
 *     Handling Events Only Once
 *         EventEmitter.once()
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 on() 方法添加的监听函数，每次触发该事件时都会执行
   */

  const eventEmitter = new EventEmitter();

  eventEmitter.on("my-event", (message: string) => {
    console.log(message);
  });

  console.assert(eventEmitter.listeners("my-event").length === 1);
  eventEmitter.emit("my-event", "A");

  console.assert(eventEmitter.listeners("my-event").length === 1);
  eventEmitter.emit("my-event", "B");
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 once() 方法添加的监听函数，最多只会执行一次，
   * 在第一次执行之前，会先解除绑定，然后执行，
   * 后续再触发该事件时，就不会在执行了
   */

  const eventEmitter = new EventEmitter();
  eventEmitter.once("my-event", message => {
    console.log(message);
  });

  console.assert(eventEmitter.listeners("my-event").length === 1);
  eventEmitter.emit("my-event", "X");

  console.assert(eventEmitter.listeners("my-event").length === 0);
  eventEmitter.emit("my-event", "y");
}
