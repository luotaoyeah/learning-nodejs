/*
 * Timers
 *     Scheduling Timers
 *         setTimeout()
 *             promisify
 */

import * as util from "util";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * setTimeout() 可以被 promisify 化
   */

  const setTimtoutAsync = util.promisify(setTimeout);

  setTimtoutAsync(1000).then(() => {
    console.log("TIMEOUT");
  });

  console.log("END");
}
