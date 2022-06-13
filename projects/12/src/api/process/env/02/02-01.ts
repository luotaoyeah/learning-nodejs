/*
 * process.env 属性
 */

import * as cp from "child_process";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以修改 process.env 对象的属性（包括添加新的属性），
   * 但是这些更改只对当前 process 有效，其他的 process 不会感知到这些更改
   */

  process.env.FOO = "FOOBAR";
  console.assert(process.env.FOO === "FOOBAR");

  /*
   * child process 中也可以感知到这些更改
   */
  cp.fork("src/api/process/env/02/02-01-01.js");
}
