/*
 * Events
 */

/*
 * 事件相关的功能，位于 events 模块下面
 */
import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 通过继承 EventEmitter 类，实现事件相关的功能
   */

  class MyEventEmitter extends EventEmitter {}

  const myEventEmitter = new MyEventEmitter();

  /*
   * 通过 EventEmitter.on() 方法（EventEmitter.addListener()），监听某个事件
   */
  myEventEmitter.on("my-event", () => {
    console.log("MY-EVENT");
  });

  /*
   * 通过 EventEmitter.emit() 方法，触发某个事件，
   * 当事件触发之后，会立即（synchronously）执行该事件的监听函数，
   * 因此，下面的代码会先执行 my-event 的监听函数，
   * 再执行最后的打印语句
   */
  myEventEmitter.emit("my-event");

  console.log("END");
}
