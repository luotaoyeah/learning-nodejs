/*
 * Understanding the Node Environment
 *     Extending JavaScript
 *         Events
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 通过继承 EventEmitter 类，实现事件监听功能；
   */
  class Counter extends EventEmitter {
    i: number;

    constructor(i: number) {
      super();
      this.i = i;
    }

    increment() {
      this.i++;
      /*
       * 通过 EventEmitter.emit() 方法，触发一个事件；
       */
      this.emit("incremented", this.i);
    }
  }

  const counter = new Counter(10);
  const callback = function(i: number) {
    console.log(i);
  };

  /*
   * 通过 addListener() 方法，添加一个事件处理函数
   */
  counter.addListener("incremented", callback);
  counter.increment(); // 11
  counter.increment(); // 12

  /*
   * 通过 removeListener() 方法，一处一个事件处理函数
   */
  counter.removeListener("incremented", callback);
  counter.increment();
}
