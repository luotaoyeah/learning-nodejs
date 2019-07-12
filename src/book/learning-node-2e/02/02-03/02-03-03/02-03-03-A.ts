import util from "util";
import { EventEmitter } from "events";

/*
 * 通常我们不会直接使用 EventEmitter 来实现 event 相关功能，
 * 而是使用自定义的 constructor 来继承 EventEmitter，从而获得 event 相关功能；
 *
 * utils.inherits()：
 *     让一个 constructor 继承另一个 constructor 的 prototype methods；
 *
 */
console.log("\n-------------------------------------------------- 01");

class Obj {}

util.inherits(Obj, EventEmitter);

const obj: Obj = new Obj();

// @ts-ignore:
obj.on("event01", (data: any) => {
  /* event01 hello */
  console.log("event01", data);
});

// @ts-ignore:
obj.emit("event01", "hello");

export {};
