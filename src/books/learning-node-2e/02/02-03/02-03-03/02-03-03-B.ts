/*
 * EventEmitter.on() 是 EventEmitter.addListener() 的简写；
 *
 */
import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");

class Obj extends EventEmitter {}
const obj: Obj = new Obj();

obj.addListener("echo", (data: string) => {
  console.log(`echo: ${data}`);
});

setTimeout(() => {
  obj.emit("echo", "hello");
}, 2000);

export {};
