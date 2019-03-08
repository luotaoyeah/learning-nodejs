console.log(`CHILD PROCESS:\t${process.pid}`);

process.on("message", (message: string) => {
  console.log(`PARENT SAID:\t${message}`);
  if (process.send) {
    process.send("BAR");
  }
});
