/*
 * Example 1-1. Hello World
 */

import http, { IncomingMessage, ServerResponse } from "http";

http
  .createServer((request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("hello world");
  })
  .listen(8080);

console.log("server is running at http://localhost:8080");
