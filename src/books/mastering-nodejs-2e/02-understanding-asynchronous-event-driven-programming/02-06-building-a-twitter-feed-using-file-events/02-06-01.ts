import * as fs from "fs";
import { fetchMessages } from "./02-06-01-02";
import { watchMessages } from "./02-06-01-03";

fetchMessages();

/** 读取消息的当前位置 */
let position = 0;
let response = null;

watchMessages((fd: number) => {
  const buffer = Buffer.alloc(140);
  fs.read(fd, buffer, 0, 140, position * 140, (e: Error, num: number) => {
    if (e) {
      throw e;
    }

    if (num > 0) {
      ++position;
      console.log(buffer.toString("utf-8", 0, num));
    }
  });
});
