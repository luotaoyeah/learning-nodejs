/*
 * EventEmitter.removeListener()
 */

import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");

class Person extends EventEmitter {
  work() {
    this.emit("working");
  }
}

const person = new Person();

/*
 * 当 emitter 对象触发一个事件之后，该事件的回调函数数组中的所有回调函数会依次执行，
 * 此时，如果在某个回调函数中，去移除另外一个回调函数，不会影响本次的事件触发的执行结果，
 * 即，所有回调函数依然会按顺序依次执行，所有函数执行完毕之后，才会执行移除操作
 */
const cb01 = () => {
  console.log("A");
  person.removeListener("working", cb02);
};

const cb02 = () => {
  console.log("B");
};

person.addListener("working", cb01);
person.addListener("working", cb02);
/*
 * 虽然在 cb01() 中移除了 cb02()，但是本次触发事件时，cb02() 依然会执行
 */
person.work();

/*
 * 后续再次触发该事件时，因为 cb02() 已经被移除了，此时它不会再执行了
 */
person.work();
