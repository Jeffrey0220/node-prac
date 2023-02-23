//modules, every file is module (by default)

const sayHi = require("./app");
const data = require("./3-alternative-exports");
require("./4-mind-grenade");
console.log(require("./4-mind-grenade"));
console.log(data);
console.log(sayHi);
sayHi("Jhon");
