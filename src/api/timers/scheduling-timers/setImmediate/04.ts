/*
 * Timers
 *     Scheduling Timers
 *         setImmediate()
 *             promisify
 */

import * as util from "util";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * setImmediate() 可以被 promisify 化
   */

  const setImmediateAsync = util.promisify(setImmediate);

  setImmediateAsync().then(() => {
    console.log("IMMEDIATE");
  });

  console.log("END");
}
