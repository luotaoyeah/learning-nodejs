/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.2. Optimizing your code
 *             1.4.2.1. Numbers and tracing optimization/de-optimization
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 为了观测到 V8 的 optimize/de-optimize 过程，我们需要使用某些 --v8-options 下面的配置选项，
   * 如下代码，使用了 V8 的命令：%FunctionGetName()，用来获取函数名称，
   * 需要使用如下的命令来执行这段代码：
   *     node --allow-natives-syntax 01-04-02-01-02.js
   * 使用了 --allow-natives-syntax 配置选项，
   */

  const someFunc = function foo() {};

  console.assert(%FunctionGetName(someFunc) === 'foo');
}
