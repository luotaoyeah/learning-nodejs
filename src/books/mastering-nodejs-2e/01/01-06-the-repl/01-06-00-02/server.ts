/*
 * 1. Understanding the Node Environment
 *     1.6. The REPL
 *         example: server
 */

import * as net from "net";
import { Socket } from "net";
import * as repl from "repl";

net
  .createServer((socket: Socket) => {
    repl
      .start({
        prompt: "$ ",
        input: socket,
        output: socket,
        terminal: true
      })
      .on("line", function(input: string) {
        console.log(input.toUpperCase());
      })
      .on("exit", () => {
        socket.end();
      });
  })
  .listen(8888);
