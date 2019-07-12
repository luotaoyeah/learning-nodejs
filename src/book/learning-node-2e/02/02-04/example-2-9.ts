import * as fs from "fs";

/*
 * Example 2-9. Application from Example 2-8 converted into asynchronous nested callbacks
 */
console.log("\n-------------------------------------------------- 01");

fs.readFile("./tmp/apples.txt", (err: NodeJS.ErrnoException | null, data: Buffer) => {
  if (err) {
    // console.error(err);
    console.error(err.stack);
  } else {
    const result: string = data.toString().replace(/[A|a]pple/g, "orange");
    fs.writeFile("./tmp/orange.txt", result, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error(err);
      }
    });
  }
});

export {};
