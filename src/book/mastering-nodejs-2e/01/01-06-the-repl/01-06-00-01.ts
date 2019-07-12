/*
 * 1. Understanding the Node Environment
 *     1.6. The REPL
 */

import * as repl from "repl";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * REPL 表示 Read-Eval-Print-Loop，也称之为 node shell，
   * 如何进入 node 的 REPL？在控制台窗口直接输入 $ node 命令并回车，即可进入，
   * 也可以在代码中，引入 repl 包，通过程序代码启动一个 REPL
   */

  repl.start({
    prompt: "$ "
  }).context.hi = function() {
    console.log("HI");
  };
}
