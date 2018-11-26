/*
 * Understanding the Node Environment
 *     Extending JavaScript
 *         Events
 */

import { Readable } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  const r = new Readable();
  let count = 0;
  r._read = function() {
    count++;
    if (count > 10) {
      r.push(null);
      return;
    }

    setTimeout(function() {
      r.push(`${count}\n`);
    }, 500);
  };

  r.pipe(process.stdout);
}
