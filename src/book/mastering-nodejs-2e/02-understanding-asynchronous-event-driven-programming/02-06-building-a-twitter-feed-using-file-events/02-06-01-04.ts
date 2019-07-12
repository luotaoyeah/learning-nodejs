import * as fs from "fs";
import { watchMessages } from "./02-06-01-03";

/**
 * 读取消息
 * @param cb
 */
function readMessage(cb: (e: Error | null, message?: string) => void) {
  let position = 0;

  watchMessages((e: Error | null, fd?: number) => {
    if (e) {
      cb(e);
      return;
    }

    if (fd) {
      const buffer = Buffer.alloc(140);
      fs.read(fd, buffer, 0, 140, position * 140, (e: NodeJS.ErrnoException | null, num: number) => {
        if (e) {
          cb(e);
          return;
        }

        if (num > 0) {
          ++position;
          cb(null, buffer.toString("utf-8", 0, num));
        }
      });
    }
  });
}

export { readMessage };
