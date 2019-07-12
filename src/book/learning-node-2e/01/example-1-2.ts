/*
 * Example 1-2. Hello World, tweaked
 */

import http, { IncomingMessage, ServerResponse } from "http";
import url from "url";
import fs, { Stats } from "fs";
import { ParsedUrlQuery } from "querystring";
import * as path from "path";

http
  .createServer((request: IncomingMessage, response: ServerResponse) => {
    if (request.url) {
      const query: ParsedUrlQuery = url.parse(request.url, true).query;
      let name: string | Array<string> | undefined = query.name;
      if (!name) {
        name = "world";
      }

      if (name === "avatar") {
        const filename: string = path.join(process.cwd(), "/dist/avatar.png");
        fs.stat(filename, (err: NodeJS.ErrnoException | null, stats: Stats) => {
          if (err) {
            console.error(JSON.stringify(err, null, 4));
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("file not found");
          } else {
            const file: Buffer = fs.readFileSync(filename);
            response.writeHead(200, {
              "Content-Length": stats.size,
              "Content-Type": "image/png"
            });
            response.end(file, "binary");
          }
        });
      } else {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(`hello ${name}`);
      }
    }
  })
  .listen(8080);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8080");
