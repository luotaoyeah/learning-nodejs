import * as fs from "fs";

/*
 * Example 2-10. Retrieving directory listing for files to modify
 */
console.log("\n-------------------------------------------------- 01");

const writeStream = fs.createWriteStream("./tmp/log.txt", {
  flags: "a",
  encoding: "utf8",
  mode: 0o666
});

let counter: number = 0;

writeStream.on("open", () => {
  fs.readdir("./tmp/data/", function(err: NodeJS.ErrnoException | null, files: Array<string>) {
    if (err) {
      console.log(err.message);
    } else {
      /*
       * forEach() 中的 callback 并不会顺序执行，而是异步并行执行；
       */
      files.forEach((filename: string) => {
        fs.readFile(`./tmp/data/${filename}`, (err: NodeJS.ErrnoException | null, data: Buffer) => {
          if (err) {
            console.log(err.message);
          } else {
            const result = data + `${new Date().toLocaleString()}\n`;
            fs.writeFile(`./tmp/data/${filename}`, result, (err: NodeJS.ErrnoException | null) => {
              if (err) {
                console.log(err.message);
              } else {
                writeStream.write(`${filename}\n`, "utf8", (err: Error | null | undefined) => {
                  if (err) {
                    console.log(err.message);
                  } else {
                    /*
                     * 使用一个计数器，确保在所有文件都处理完成之后，打印一个换行符号；
                     */
                    counter++;
                    if (counter === files.length) {
                      writeStream.write("\n");
                    }
                  }
                });
              }
            });
          }
        });
      });
    }
  });
});

/*
 * fs.createWriteStream() 不能使用 callback，
 * 因此监听其 error 事件进行 error handling；
 */
writeStream.on("error", (err: NodeJS.ErrnoException | null) => {
  console.error("ERROR:", err);
});

export {};
