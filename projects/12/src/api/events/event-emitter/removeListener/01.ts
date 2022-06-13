/*
 * EventEmitter.removeListener()
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");

/*
 * EventEmitter.removeListener() 方法，用来移除一个事件监听函数
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

const counter = new Counter();

const cb = (count: number) => {
  console.log("COUNT:", count);
};

/*
 * 必须指定要移除的'事件名称'以及'回调函数'
 */
counter.addListener("incremented", cb);
counter.increment();
counter.increment();

counter.removeListener("incremented", cb);
counter.increment();
