/*
 * 1. Understanding the Node Environment
 *     1.5. The process Object
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * process 是一个全局对象（global），无需引入，直接使用，
   * 它提供了当前 node 进程的相关信息和配置
   */

  // 使用下面的命令执行这段程序：$ node 01-05-01.js 1000000 100
  const size = Number(process.argv[2]);
  const n: number = Number(process.argv[3]);

  const buffers: Array<Buffer> = [];
  for (let i = 0; i < n; i++) {
    buffers.push(Buffer.alloc(size));
    process.stdout.write(`${process.memoryUsage().heapTotal}\n`);
  }
}
