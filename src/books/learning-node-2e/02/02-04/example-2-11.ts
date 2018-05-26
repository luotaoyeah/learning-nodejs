import * as fs from "fs";
import { Stats } from "fs";

/*
 * Example 2-11. Adding in a stats check of each directory object to make sure it’s a file
 */
console.log("\n-------------------------------------------------- 01");

const writeStream = fs.createWriteStream("./tmp/log.txt", {
  flags: "a",
  encoding: "utf8",
  mode: 0o666
});

let counter: number = 0;

writeStream.on("open", () => {
  fs.readdir(
    "./tmp/data/",
    (err: NodeJS.ErrnoException, files: Array<string>) => {
      if (err) {
        console.log(err.message);
      } else {
        files.forEach((filename: string) => {
          fs.stat(
            `./tmp/data/${filename}`,
            (err: NodeJS.ErrnoException, stats: Stats) => {
              if (err) {
                console.log(err.message);
              } else {
                if (!stats.isFile()) {
                  counter++;
                  return;
                }

                fs.readFile(
                  `./tmp/data/${filename}`,
                  (err: NodeJS.ErrnoException, data: Buffer) => {
                    if (err) {
                      console.log(err.message);
                    } else {
                      const result: string = `${data}${new Date().toLocaleString()}\n`;
                      fs.writeFile(
                        `./tmp/data/${filename}`,
                        result,
                        (err: NodeJS.ErrnoException) => {
                          if (err) {
                            console.log(err.message);
                          } else {
                            writeStream.write(
                              `${filename}\n`,
                              "utf8",
                              (err: NodeJS.ErrnoException) => {
                                if (err) {
                                  console.log(err.message);
                                } else {
                                  counter++;
                                  if (counter == files.length) {
                                    writeStream.write("\n");
                                  }
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        });
      }
    }
  );
});

writeStream.on("error", (err: NodeJS.ErrnoException) => {
  console.log("ERROR:", err);
});
export {};
