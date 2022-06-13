/*
 * 1. Understanding the Node Environment
 *     1.3. Extending JavaScript
 *         1.3.1. Events
 *             EventEmitter.removeListener()
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 通过 EventEmitter.removeListener() 方法，移除一个事件监听函数
   */

  class Counter extends EventEmitter {
    static readonly INCREMENTED: string = "incremented";

    private count: number = 0;

    constructor(count?: number) {
      super();
      if (count) {
        this.count = count;
      }
    }

    increment() {
      this.count++;
      this.emit(Counter.INCREMENTED, this.count);
    }
  }

  const counter = new Counter(10);

  const handleIncrement = (count: number) => {
    console.log("COUNT:", count);
  };

  counter.addListener(Counter.INCREMENTED, handleIncrement);
  counter.increment();

  counter.removeListener(Counter.INCREMENTED, handleIncrement);
  counter.increment();
}
