const { readFile, writeFile } = require("fs");

//if no 'utf8', the result is buffer string
readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

//async call back structure
console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: \'${first}\', \'${second}\'.`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("start next");
