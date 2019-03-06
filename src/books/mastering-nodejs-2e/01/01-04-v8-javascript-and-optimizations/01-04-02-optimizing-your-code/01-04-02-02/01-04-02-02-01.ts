/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.2. Optimizing your code
 *             1.4.2.1. Numbers and tracing optimization/de-optimization
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * JS 中的 number 类型是一个 64 位的双精度（double-precision）的浮点数（floating-point number），
   * 遵循的是 IEEE 754 规范，
   * 也就是说 JS 里面实际上是没有 integer number 的，只有 floating-point number，
   * 而 V8 在实现 number 类型的时候，实际上实现了两个 number 类型，
   * 当在这两个类型之间进行转换时，会有性能损失；
   *
   * 如下代码，在 V8 中会发生 optimize/de-optimize 过程
   */

  let a = 9;
  a = 9.99;

  console.log();
}
