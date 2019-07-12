/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.2. Optimizing your code
 *             1.4.2.2. Objects and Arrays
 */

/*
 * V8 对 object 和 array 的优化，有下面一些规则：
 */
console.log("\n-------------------------------------------------- 01");
{
  /*
   * 保持 array 中所有的元素类型一致，
   * 因为 array 中的元素类型可以是任意的，且可以是不同的，但是当我们刻意保持它们的类型一致时，
   * 可以更好地进行优化，
   */

  const arr01 = [1, 2, 3]; // √
  const arr02 = ["1", "2", "3"]; // √
  const arr03 = ["1", 2, "3"]; // ×
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 在 object 和 array 的属性或元素完成初始化之后，
   * 不要再去改变元素的类型
   */

  const arr01: Array<number | string> = [1, 2, 3];
  arr01[1] = 4; // √
  arr01[1] = "4"; // ×
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * array 中不要出现空元素，
   * 当 array 中没有空元素时，V8 使用线性存储策略来保存 array 的数据，高效，
   * 当 array 中存在空元素时，V8 使用 hash table 来保存 array 的数据，低效，
   */

  const arr01 = new Array(9); // ×

  const arr02 = [1, 2, 3];
  // 删除元素也会形成空元素
  delete arr02[1]; // ×
}

console.log("\n-------------------------------------------------- 04");
{
  /*
   * 不要在对象完成初始化之后，再添加新的属性
   */

  const obj01: any = { x: 1 };
  obj01.y = 2; // ×

  const obj02 = { x: 1, y: 2 }; // √
}
