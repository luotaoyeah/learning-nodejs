/*
 * Example 2-1. Demonstrating standard I/O in Node, and exiting application
 */

import _ from "lodash";

/*
 * 设置编码之后，
 * 使用 process.stdin.read() 读取到的数据是 string，
 * 否则为 buffer；
 */
process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
  const input: string | Buffer = process.stdin.read();

  if (_.isString(input)) {
    process.stdout.write(input.toUpperCase());

    if (input.trim() === "exit") {
      process.exit(0);
    }
  }
});
