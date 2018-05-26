import * as fs from "fs";

/*
 * 2.4 Nested Callbacks and Exception Handling
 */

/*
 * Example 2-8. A sequential synchronous application
 */

console.log("\n-------------------------------------------------- 01");
try {
  const data: string = fs.readFileSync("./tmp/apples.txt", "utf8");
  const result: string = data.replace(/[A|a]pple/g, "orange");
  fs.writeFileSync("./tmp/oranges.txt", result);
} catch (e) {
  console.error(e);
}

export {};
