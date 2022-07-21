const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.err(err);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.err(err);
      return;
    }
    const second = res;
    writeFile(
      "./content/result_sync.txt",
      `Here is the result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.err(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("Starting next task");