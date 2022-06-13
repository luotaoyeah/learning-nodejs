/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.1. Signals
 *             SIGUSR1
 */

console.log("\n-------------------------------------------------- 01");
{
  setInterval(() => {}, 1e6);

  console.log(process.pid);

  // windows 不支持 SIGUSR1，SIGUSR2
  process.on("SIGUSR1", () => {
    console.log("SIGUSR1");
  });
}
