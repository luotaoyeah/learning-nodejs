/*
 * 1. Understanding the Node Environment
 *     1.3. Extending JavaScript
 *         1.3.3. The Network
 */

/*
 * UDP 相关功能位于 dgram 包下面，dgram 表示 datagram（数据报文）
 */
import dgram, { Socket } from "dgram";
import { EventEmitter } from "events";

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 因为安全因素，浏览器中的 JS 被限制了很多的能力，
   * 而 nodejs 中的 JS 具有系统级语言的能力，能够访问系统底层，
   * 包括文件系统，网络传输协议（socket），进程等等，
   * 在网络层面，nodejs 不仅支持 HTTP，还支持 TLS/SSL，UDP 等
   */

  const socket: Socket = dgram.createSocket("udp4");
  console.assert(socket instanceof EventEmitter);
}
