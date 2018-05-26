import Timer = NodeJS.Timer;

/*
 * Timer.unref()：
 *     调用某个 timer.unref()，如果该 timer 是 event loop 的唯一的一个 event，
 *     则该 timer 取消，程序可以被终止；
 */
console.log("\n-------------------------------------------------- 01");
const timer01: Timer = setTimeout(() => {
  console.log("timer01");
}, 5000);

timer01.unref();

console.log("waiting on timer01");

console.log("\n-------------------------------------------------- 02");
const interval01 = setInterval(() => {
  console.log("interval");
}, 1000);

const timer02: Timer = setTimeout(() => {
  clearInterval(interval01);
  console.log("timer02");
}, 10000);

timer02.unref();

console.log("waiting on timer02");

export {};
