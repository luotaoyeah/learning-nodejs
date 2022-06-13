/*
 * 3. Streaming Data Across Nodes and Clients
 *     3.2. Exploring Streams
 */

import { Stream, Readable, Writable, Duplex, Transform, PassThrough } from "stream";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟 stream 相关的 interface 和 class 都位于 stream 这个模块中，
   * 主要的几个 interface 和 class 为：
   *     Stream
   *         Writable
   *         Readable
   *             Duplex
   *                 Transform
   *                     PassThrough
   */

  console.assert(Readable.prototype instanceof Stream);
  console.assert(Writable.prototype instanceof Stream);
  console.assert(Duplex.prototype instanceof Readable);
  console.assert(Transform.prototype instanceof Duplex);
  console.assert(PassThrough.prototype instanceof Transform);
}
