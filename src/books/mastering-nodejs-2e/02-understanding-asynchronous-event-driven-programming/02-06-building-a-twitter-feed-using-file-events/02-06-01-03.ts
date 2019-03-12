import * as fs from "fs";
import { fetchMessages } from "./02-06-01-02";

/**
 * 监视消息
 * @param cb
 */
function watchMessages(cb: (e: Error | null, fd?: number) => void) {
  fetchMessages();

  fs.open("./dist/02-06-01.txt", "r", (e: Error, fd: number) => {
    if (e) {
      cb(e);
      return;
    }

    fs.watch(
      "./dist/02-06-01.txt",
      { persistent: false },
      (event: string, filename: string) => {
        if (event === "change") {
          cb(null, fd);
        }
      }
    );
  });
}

export { watchMessages };
