import http, { IncomingMessage, Server, ServerResponse } from "http";

/*
 * Example 2-4. Basic web server with additional event highlighting
 */

console.log("\n-------------------------------------------------- 01");

const server: Server = http.createServer();

/* on() 方法继承自 EventEmitter */
server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  /*
   * chrome 会触发两次 request 事件，因为它会请求 favicon.ico；
   */
  console.log("request");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("hello world");
});

server.on("connection", () => {
  /*
   * 第一次 connection 建立之后，
   * 在不关闭浏览器，且未超时的情况下，不会再次触发 connection 事件；
   */
  console.log("connection");
});

server.listen(8124);
server.on("listening", () => {
  console.log("listening");
});

console.log("server is running at http://localhost:8124");

export {};
