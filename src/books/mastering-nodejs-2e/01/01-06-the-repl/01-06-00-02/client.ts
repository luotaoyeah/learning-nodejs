/*
 * 1. Understanding the Node Environment
 *     1.6. The REPL
 *         example: client
 */

import * as net from "net";
import { Socket } from "net";

let socket: Socket = net.connect(8888);
process.stdin.pipe(socket);
socket.pipe(process.stdout);
