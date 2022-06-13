/*
 * 2. Understanding Asynchronous Event-Driven Programming
 *     2.5. Concurrency and Errors
 *         2.5.1. Managing Concurrency
 *             2.5.1.4. Generator and Iterator
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 什么是 generator？
   *     generator 是一种特殊的 function，它的执行可以被暂停和恢复，
   *     在这个过程中，它的执行上下文（context）是被保留的，
   *     generator 实现了 iteratable protocol 和 iterator protocol
   */

  function* gen01(): IterableIterator<string> {
    yield "A";
    yield "B";
    yield "C";
  }

  // 调用 generator function，返回的是一个 iterator 对象
  const iter01: IterableIterator<string> = gen01();

  // 调用 iterator 的 next() 方法，返回的是一个 IteratorResult 对象
  console.assert(iter01.next().value === "A");
  console.assert(iter01.next().value === "B");
  console.assert(iter01.next().value === "C");
  console.assert(iter01.next().done === true);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 可以自己实现 iteration protocol，
   * iterable protocol 规定：
   *     必须实现一个 [Symbol.iterator]() 方法，
   *     该方法返回一个 iterator
   * iterator protocol 规定：
   *     必须实现一个 next() 方法，
   *     每次调用 next() 方法，返回一个 { value: any, done: boolean } 对象，
   *     其中，done 表示迭代是否完毕，value 表示本次迭代的值
   */

  const iterable01 = {
    _items: ["A", "B", "C"],
    [Symbol.iterator]: function() {
      let index = 0;
      return {
        next: () => {
          const done = index > 2;
          const value = done ? undefined : this._items[index];
          index++;
          return { value, done };
        }
      };
    }
  };

  const iter01 = iterable01[Symbol.iterator]();

  console.assert(iter01.next().value === "A");
  console.assert(iter01.next().value === "B");
  console.assert(iter01.next().value === "C");
  console.assert(iter01.next().done === true);
}
