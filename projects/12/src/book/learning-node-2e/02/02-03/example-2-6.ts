import { EventEmitter } from "events";
/*
 * 2.3.3 EventEmitter
 */

/*
 * Example 2-6. Very basic test of the EventEmitter functionality
 */
console.log("\n-------------------------------------------------- 01");

const eventEmitter: EventEmitter = new EventEmitter();
/*
 * EventEmitter.on() 用于监听事件；
 */
eventEmitter.on("timed", (count, time) => {
  console.log(`${time.toLocaleString()} - ${count}`);
});

let counter = 0;
setInterval(() => {
  /*
   * EventEmitter.emit() 用于触发事件；
   */
  eventEmitter.emit("timed", ++counter, new Date());
}, 1000);

export {};
