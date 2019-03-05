/*
 * EventEmitter.removeListener()
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");

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
  console.log("INCREMENTED:", count);
};

/*
 * 如果对于同一个事件，同一个监听函数添加了多次，
 * 那么在移除的时候，也必须调用 removeListener() 方法多次
 */
counter.addListener("incremented", cb);
counter.addListener("incremented", cb);
counter.increment();

/*
 * 通过下面的测试代码，可以看到 incremented 事件的回调函数数组中，
 * 有两个回调函数，实际上它们指向的是同一个函数对象，即上面定义的 cb 函数
 */
// @ts-ignore
console.assert(counter._events.incremented.length === 2);
console.assert(
  // @ts-ignore
  counter._events.incremented[0] === counter._events.incremented[1]
);

counter.removeListener("incremented", cb);
counter.removeListener("incremented", cb);
counter.increment();
