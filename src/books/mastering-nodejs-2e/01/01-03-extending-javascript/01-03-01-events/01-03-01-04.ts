/*
 * 1. Understanding the Node Environment
 *     1.3. Extending JavaScript
 *         1.3.1. Events
 *             asynchronous non-blocking I/O
 */

import { Readable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  let count: number = 0;

  const readable = new Readable();

  readable._read = function() {
    count++;

    if (count > 10) {
      this.push(null);
      return;
    }

    setTimeout(() => {
      this.push(`${count}\n`);
    }, 500);
  };

  readable.pipe(process.stdout);
}
