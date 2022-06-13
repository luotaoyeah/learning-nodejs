/*
 * Events
 *     multiple listeners
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  class MyEventEmitter extends EventEmitter {}

  const myEventEmitter = new MyEventEmitter();

  /*
   * 同一个事件（my-event）可以绑定多个监听函数，
   * 当触发事件时，该事件下的所有监听函数会依次执行
   */
  myEventEmitter.addListener("my-event", () => {
    console.log(`MY-EVENT: 01`);
  });

  myEventEmitter.on("my-event", () => {
    console.log(`MY-EVENT: 02`);

    /*
     * 监听函数的返回值会被忽略
     */
    return 0;
  });

  myEventEmitter.emit("my-event");
}
