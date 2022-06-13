import { EventEmitter } from "events";

/*
 * 默认情况，一个事件可以绑定 10 个监听函数，超过 10 个会警告；
 * 可以通过 EventEmitter.setMaxListeners() 设置最大监听函数数量，
 * 0 表示没有限制；
 *
 */

console.log("\n-------------------------------------------------- 01");

/*
 * MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
 * 11 echo listeners added. Use emitter.setMaxListeners() to increase limit
 */
class Obj extends EventEmitter {}
const obj = new Obj();

obj.setMaxListeners(0);

for (let i = 0; i <= 10; i++) {
  obj.addListener("echo", () => {
    console.log(`echo ${i}`);
  });
}

process.nextTick(() => {
  obj.emit("echo");
});

export {};
