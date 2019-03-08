/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.3. Listening for Events
 *         2.3.2. Child Process
 */

const child_process = require("child_process");

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 父子进程之间如何进行通信？
   * 通过 fork() 方法创建一个子进程之后，会返回子进程对象，
   * 通过监听子进程对象的 message 事件，可以监听子进程给父进程发送的消息，
   * 通过子进程对象的 send() 方法，可以实现父进程给子进程发送消息，
   */

  console.log(`PARENT PROCESS:\t${process.pid}`);

  const childProcess = child_process.fork(
    "src/books/mastering-nodejs-2e/02-understanding-asynchronous-event-driven-programming/02-03-listening-for-events/02-03-02-child-process/02-03-02-02/02-03-02-02-02.ts"
  );

  childProcess.on("message", (message: string) => {
    console.log(`CHILD SAID:\t\t${message}`);
    process.exit(0);
  });

  childProcess.send("FOO");
}
