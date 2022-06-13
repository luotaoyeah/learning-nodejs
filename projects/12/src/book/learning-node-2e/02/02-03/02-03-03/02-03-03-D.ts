import { EventEmitter } from "events";

/*
 * EventEmitter.removeListener()：
 *     移除一个事件监听函数；
 */

console.log("\n-------------------------------------------------- 01");

class Obj extends EventEmitter {}
const obj = new Obj();

function listener01() {
  console.log("listener 01");
}

function listener02() {
  console.log("listener 02");
}

obj.addListener("echo", listener01);
obj.addListener("echo", listener02);
obj.removeListener("echo", listener01);
obj.emit("echo");

export {};
