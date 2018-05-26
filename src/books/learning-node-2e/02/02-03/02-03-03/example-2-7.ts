import { EventEmitter } from "events";
import { default as fs, WriteStream } from "fs";
/*
 * Example 2-7. Creating an event-based object that inherits from EventEmitter
 */
console.log("\n-------------------------------------------------- 01");

/**
 *
 */
class InputChecker extends EventEmitter {
  name: string;
  writeStream: WriteStream;

  constructor(name: string, filename: string) {
    super();
    this.name = name;
    this.writeStream = fs.createWriteStream(`./temp/${filename}.txt`, {
      flags: "a",
      encoding: "utf8",
      mode: 0o666
    });
  }

  /**
   * 处理输入，根据不同的输入执行不同的逻辑；
   * @param input
   */
  check(input: string) {
    const command = input.trim().substr(0, 3);
    if (command === "wr:") {
      this.emit("write", input.substr(3, input.length));
    } else if (command === "en:") {
      this.emit("end");
    } else {
      this.emit("echo", input);
    }
  }
}

const inputChecker: InputChecker = new InputChecker("tom", "example-2-7");
inputChecker.on("write", function(this: InputChecker, data: string) {
  this.writeStream.write(data, "utf8");
});
inputChecker.on("echo", function(this: InputChecker, data: string) {
  process.stdout.write(`${this.name} echo: ${data}`);
});
inputChecker.on("end", () => {
  process.exit();
});

process.stdin.setEncoding("utf8");
process.stdin.on("readable", function() {
  const input: string | Buffer = process.stdin.read();
  if (input !== null) {
    inputChecker.check(input.toString());
  }
});

export {};
