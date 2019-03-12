import * as crypto from "crypto";
import * as fs from "fs";

/**
 * 获取消息
 */
function fetchMessages() {
  const writeStream = fs.createWriteStream("./dist/02-06-01.txt", {
    // a 表示 append，附加内容
    flags: "a"
  });

  const interval = setInterval(() => {
    const message = crypto
      .randomBytes(70)
      .toString("hex")
      .toUpperCase();

    writeStream.write(message);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 1000 * 60);
}

export { fetchMessages };
