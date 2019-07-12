/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.2. Errors and Exceptions
 *             event context
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * event context
   * 对于事件对象来说，当需要抛出一个错误时，
   * 通常的做法是，触发一个 error 事件，并将 error 对象作为事件参数，
   * 在 nodejs 中，error 事件是一个特殊的事件，当 error 事件没有绑定处理函数时，
   * 默认的行为是：打印错误堆栈信息，并退出程序
   */

  class Calculator extends EventEmitter {
    calc(x: number, y: number): number | undefined {
      if (!Number.isInteger(x) || !Number.isInteger(y)) {
        this.emit("error", new Error("NOT INTEGER"));
        return;
      }

      return x * y;
    }
  }

  const calculator = new Calculator();
  calculator.addListener("error", (e: Error) => {
    console.error(e.message);
  });

  calculator.calc(9, 9);
  calculator.calc(9.9, 9.9);
}
