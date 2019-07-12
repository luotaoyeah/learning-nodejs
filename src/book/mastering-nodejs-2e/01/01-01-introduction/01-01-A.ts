/*
 * Understanding the Node Environment
 *     Introduction – JavaScript as a systems language
 */

console.log("\n-------------------------------------------------- 01");
/**
 *
 * @param buffer
 * @param code
 * @returns {number}
 */
function findByte(buffer: Buffer, code: number): number {
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] === code) {
      return i;
    }
  }

  return -1;
}

console.log(findByte(Buffer.from("ascii A is byte value sixty-five"), 65));

/*
 * V8 使得 JS 的执行速度非常快；
 */
console.log("\n-------------------------------------------------- 02");
(function() {
  let n = 1000000000;
  console.time("js loop 1000000000 in");
  for (let i = 0; i < n; i++) {}
  console.timeEnd("js loop 1000000000 in");
})();
