//const fs=require("fs");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: \'${first}\', \'${second}\'.`,
  { flag: "a" }
); //by default it will overwrite the existing contents. but if set flag as "a", it will append the new contents to the existing contents
const result = readFileSync("./content/result-sync.txt", "utf8");
console.log(result);
