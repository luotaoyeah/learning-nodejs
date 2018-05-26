/*
 * setInterval()；
 *
 * clearInterval()：
 *     取消一个 interval timer；
 *
 */
import Timer = NodeJS.Timer;

console.log("\n-------------------------------------------------- 01");

const timer: Timer = setInterval(() => {
  console.log("interval");
}, 1000);

console.log("waiting on timer");

setTimeout(() => {
  clearInterval(timer);
}, 5000);

export {};
