/*
 * 1. Understanding the Node Environment
 *     1.4. V8, JavaScript, and optimizations
 *         1.4.1. Flags
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * node 支持很多的参数配置，可以通过 node --help 命令查看，
   * 比如：
   *     --experimental-modules 表示启用 ESM 模块系统支持
   *     --v8-options           表示配置 V8 参数
   *     --eval                 表示将指定的字符串解析为 js 代码执行
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * $ node --help
   * Usage: node [options] [ -e script | script.js | - ] [arguments]
   *        node inspect script.js [arguments]
   *
   * Options:
   *   -                                       script read from stdin (default if no file name is
   *                                           provided, interactive mode if a tty)
   *   --                                      indicate the end of node options
   *   --abort-on-uncaught-exception           aborting instead of exiting causes a core file to be
   *                                           generated for analysis
   *   -c, --check                             syntax check script without executing
   *   --completion-bash                       print source-able bash completion script
   *   -e, --eval=...                          evaluate script
   *   --experimental-modules                  experimental ES Module support and caching modules
   *   --experimental-repl-await               experimental await keyword support in REPL
   *   --experimental-vm-modules               experimental ES Module support in vm module
   *   --experimental-worker                   experimental threaded Worker support
   *   -h, --help                              print node command line options (currently set)
   *   --icu-data-dir=...                      set ICU data load path to dir (overrides NODE_ICU_DATA)
   *   --inspect[=[host:]port]                 activate inspector on host:port (default: 127.0.0.1:9229)
   *   --inspect-brk[=[host:]port]             activate inspector on host:port and break at start of
   *                                           user script
   *   --debug-port, --inspect-port=[host:]port
   *                                           set host:port for inspector
   *   -i, --interactive                       always enter the REPL even if stdin does not appear to be
   *                                           a terminal
   *   --loader=...                            (with --experimental-modules) use the specified file as a
   *                                           custom loader
   *   --max-http-header-size=...              set the maximum size of HTTP headers (default: 8KB)
   *   --no-deprecation                        silence deprecation warnings
   *   --no-force-async-hooks-checks           disable checks for async_hooks
   *   --no-warnings                           silence all process warnings
   *   --openssl-config=...                    load OpenSSL configuration from the specified file
   *                                           (overrides OPENSSL_CONF)
   *   --pending-deprecation                   emit pending deprecation warnings
   *   --preserve-symlinks                     preserve symbolic links when resolving
   *   --preserve-symlinks-main                preserve symbolic links when resolving the main module
   *   -p, --print [...]                       evaluate script and print result
   *   --prof-process                          process V8 profiler output generated using --prof
   *   --redirect-warnings=...                 write warnings to file instead of stderr
   *   -r, --require=...                       module to preload (option can be repeated)
   *   --throw-deprecation                     throw an exception on deprecations
   *   --title=...                             the process title to use on startup
   *   --tls-cipher-list=...                   use an alternative default TLS cipher list
   *   --trace-deprecation                     show stack traces on deprecations
   *   --trace-event-categories=...            comma separated list of trace event categories to record
   *   --trace-event-file-pattern=...          Template string specifying the filepath for the
   *                                           trace-events data, it supports ${rotation} and ${pid}.
   *   --trace-sync-io                         show stack trace when use of sync IO is detected after
   *                                           the first tick
   *   --trace-warnings                        show stack traces on process warnings
   *   --track-heap-objects                    track heap object allocations for heap snapshots
   *   --use-bundled-ca                        use bundled CA store (default)
   *   --use-openssl-ca                        use OpenSSL's default CA store
   *   --v8-options                            print V8 command line options
   *   --v8-pool-size=...                      set V8's thread pool size
   *   -v, --version                           print Node.js version
   *   --zero-fill-buffers                     automatically zero-fill all newly allocated Buffer and
   *                                           SlowBuffer instances
   */
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * --v8-options 中比较常用的配置，比如 --max-old-space-size 用来配置最大占用内存，单位为兆
   */
}
