import { EventEmitter } from "events";

/*
 * Understanding the Node Environment
 *     Extending JavaScript
 *         Events
 *             on
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟浏览器中的 JS 一样，
   * 可以通过 addListener() 方法添加事件处理函数，
   * 也可以通过 on() 方法添加事件处理函数；
   */

  class Counter extends EventEmitter {
    i: number;

    constructor(i: number) {
      super();
      this.i = i;
    }

    increment() {
      this.i++;
      this.emit("incremented", this.i);
    }
  }

  const counter = new Counter(10);
  counter.on("incremented", (i: number) => {
    console.log(i);
  });
  counter.increment(); // 11
  counter.increment(); // 12
}
