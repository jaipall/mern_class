const fs = require("node:fs");
console.log("-------start------");
const response = fs.readFileSync("./temp.text", "utf-8");
console.log(response);

console.log("----------mid---------");

const response2 = fs.readFileSync("./student.text", "utf-8");
console.log(response2);

console.log("------end---------");
