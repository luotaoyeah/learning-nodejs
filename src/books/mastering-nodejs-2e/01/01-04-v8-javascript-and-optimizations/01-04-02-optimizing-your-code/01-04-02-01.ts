/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.2. Optimizing your code
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * JS 作为一个动态的（dynamic），解释型（interpreted）的语言，比起静态的（static），编译型（compiled）的语言，
   * 存在的一个缺陷就是执行速度比较慢，V8 对此进行了一些优化，
   *     首先，V8会将 JS 编译为本地机器指令（native machine code），而不是解释型的字节码（bytecode），
   *     其次，在编译和执行的过程中，分为两步：
   *         首先将 JS 代码尽快地执行起来，不做其他的分析和优化，
   *         其次，等到代码执行起来之后，optimizing compiler 开始监测代码并尝试进行优化，
   *             在这个过程中，某些优化行为可能是错误的，
   *             这时候，optimizing compiler 会对已经进行的优化进行回退（de-optimize）
   */
}
