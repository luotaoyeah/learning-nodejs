import * as fs from "fs";

/**
 * 监视消息
 */
function watchMessages(cb: (fd: number) => void) {
  fs.open("./dist/02-06-01.txt", "r", (e: Error, fd: number) => {
    if (e) {
      throw e;
    }

    fs.watch(
      "./dist/02-06-01.txt",
      { persistent: false },
      (event: string, filename: string) => {
        if (event === "change") {
          cb(fd);
        }
      }
    );
  });
}

export { watchMessages };
