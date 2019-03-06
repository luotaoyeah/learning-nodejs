/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.2. Optimizing your code
 *             1.4.2.1. Numbers and tracing optimization/de-optimization
 */

/*
 * 使用如下命令执行文件：
 *     node --allow-natives-syntax --trace-opt --trace-deopt 01-04-02-02-03.js
 * 输出如下：
 *     [manually marking 0x034752e9f6f1 <JSFunction square (sfi = 000003E25BA5AAF1)> for non-concurrent optimization]
 *     [compiling method 0x034752e9f6f1 <JSFunction square (sfi = 000003E25BA5AAF1)> using TurboFan]
 *     [optimizing 0x034752e9f6f1 <JSFunction square (sfi = 000003E25BA5AAF1)> - took 1.692, 0.383, 0.040 ms]
 */

console.log("\n-------------------------------------------------- 01");
{
  let operand = 3;

  function square() {
    return operand * operand;
  }

  square();
  %OptimizeFunctionOnNextCall(square);

  /*
   * 如果改变了 operand 的 number 类型（从 interger 变成 floating-point），
   * 再次执行，输出如下：
   *     [manually marking 0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)> for non-concurrent optimization]
   *     [compiling method 0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)> using TurboFan]
   *     [optimizing 0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)> - took 1.842, 0.458, 0.042 ms]
   *     [deoptimizing (DEOPT eager): begin 0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)> (opt #0) @0, FP to SP delta: 32, caller sp: 0x0029bfbdde88]
   *                 ;;; deoptimize at <01-04-02-02-03.js:22:20>, not a Smi
   *       reading input frame square => bytecode_offset=0, args=1, height=2; inputs:
   *           0: 0x0353ad81d341 ;  [fp -  16]  0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)>
   *           1: 0x005f95a8d561 ;  [fp +  16]  0x005f95a8d561 <JSGlobal Object>
   *           2: 0x0353ad81d309 ;  [fp -  24]  0x0353ad81d309 <BlockContext[5]>
   *           3: 0x037540803211 ; (literal  1) 0x037540803211 <Odd Oddball: optimized_out>
   *           4: 0x037540803211 ; (literal  1) 0x037540803211 <Odd Oddball: optimized_out>
   *       translating interpreted frame square => bytecode_offset=0, height=16
   *         0x0029bfbdde80: [top +  64] <- 0x005f95a8d561 <JSGlobal Object> ;  stack parameter (input #1)
   *         -------------------------
   *         0x0029bfbdde78: [top +  56] <- 0x0243feb91b5c ;  caller's pc
   *         0x0029bfbdde70: [top +  48] <- 0x0029bfbdded0 ;  caller's fp
   *         0x0029bfbdde68: [top +  40] <- 0x0353ad81d309 <BlockContext[5]> ;  context
   *      (input #0)
   *         0x0029bfbdde60: [top +  32] <- 0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)> ;  function
   *      (input #0)
   *         0x0029bfbdde58: [top +  24] <- 0x0251436e8079 <BytecodeArray[15]> ;  bytecode array
   *         0x0029bfbdde50: [top +  16] <- 0x003900000000 <Smi 57> ;  bytecode offset
   *         -------------------------
   *         0x0029bfbdde48: [top +   8] <- 0x037540803211 <Odd Oddball: optimized_out> ;  stack parameter (input #3)
   *         0x0029bfbdde40: [top +   0] <- 0x037540803211 <Odd Oddball: optimized_out> ;  accumulator (input #0)
   *     [deoptimizing (eager): end 0x0353ad81d341 <JSFunction square (sfi = 00000251436DAAF1)> @0 => node=0, pc=0x0243feb92140, caller sp=0x0029bfbdde88, took 37.678 ms]
   *
   * 可以看到有一个 optimize 和 de-optimize 的过程
   */
  operand = 3.3;
  square();
}
