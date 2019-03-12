import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";
import { readMessage } from "./02-06-01-04";
import * as crypto from "crypto";

let httpResponse: ServerResponse | null = null;

http
  .createServer((request: IncomingMessage, response: ServerResponse) => {
    httpResponse = response;

    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/event-stream"
    });
  })
  .listen(8888);

readMessage((e: Error | null, message?: string) => {
  if (e) {
    throw e;
  }

  if (httpResponse) {
    httpResponse.write(`data:${message}\n\n`);
  }
});

/*
 * 由于在 windows 平台下，监听文件变化不起作用，
 * 因此使用下面的代码来模拟消息来源
 */
setInterval(() => {
  if (httpResponse) {
    httpResponse.write(
      `data:${crypto
        .randomBytes(10)
        .toString("hex")
        .toUpperCase()}\n\n`
    );
  }
}, 1000);
