/*
 * 2.3.4 The Node Event Loop and Timers
 */

/*
 * setTimeout()
 */
import Timer = NodeJS.Timer;

console.log("\n-------------------------------------------------- 01");

setTimeout(
  (firstname: string, lastname: string) => {
    console.log(`name: ${firstname} ${lastname}`);
  },
  2000,
  "foo",
  "bar"
);

console.log("waiting on timer");

/*
 * clearTimeout()：
 *     取消一个 timer；
 */
console.log("\n-------------------------------------------------- 02");

const timer01: Timer = setTimeout(() => {
  console.log("setTimeout()");
}, 3000);

console.log("waiting on timer");
clearTimeout(timer01);

export {};
