/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.2. Child Process
 */

import * as child_process from "child_process";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当需要实现并行运行时，nodejs 使用的方式是创建新的子进程（child process），
   * 而不是使用线程池（thread pool）的方式，
   */

  console.log(`PARENT PROCESS:\t${process.pid}`);

  const childProcess = child_process.fork(
    "src/books/mastering-nodejs-2e/02-understanding-asynchronous-event-driven-programming/02-03-listening-for-events/02-03-02-child-process/02-03-02-01/02-03-02-01-02.ts"
  );
}
