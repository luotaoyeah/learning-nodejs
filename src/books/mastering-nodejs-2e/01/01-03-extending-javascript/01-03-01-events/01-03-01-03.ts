/*
 * 1. Understanding the Node Environment
 *     1.3. Extending JavaScript
 *         1.3.1. Events
 *             on，off
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 为了跟浏览器中的事件模型保持一致，
   * EventEmitter.on() 和 EventEmitter.addListener() 方法是等价的，
   * EventEmitter.off() 和 EventEmitter.removeListener() 方法是等价的，
   */

  class Counter extends EventEmitter {
    private count: number = 0;

    constructor(count?: number) {
      super();
      if (count) {
        this.count = count;
      }
    }

    increment() {
      this.count++;
      this.emit("incremented", this.count);
    }
  }

  const counter = new Counter(10);

  const cb = (count: number) => {
    console.log("INCREMENTED:", count);
  };

  counter.on("incremented", cb);
  counter.increment();

  counter.off("incremented", cb);
  counter.increment();
}
