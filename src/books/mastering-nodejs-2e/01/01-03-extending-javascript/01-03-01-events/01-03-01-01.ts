/*
 * 1. Understanding the Node Environment
 *     1.3. Extending JavaScript
 *         1.3.1. Events
 *             EventEmitter
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 通过继承 EventEmitter 类，可以继承 node 提供的事件相关的 API
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

      /*
       * 通过 EventEmitter.emit() 方法，发出一个事件
       */
      this.emit(Counter.INCREMENTED, this.count);
    }
  }

  const counter = new Counter(10);

  /*
   * 通过 EventEmitter.addListener() 方法，添加一个事件监听函数
   */
  counter.addListener(Counter.INCREMENTED, (count: number) => {
    console.log("COUNT:", count);
  });

  counter.increment();
  counter.increment();
}
