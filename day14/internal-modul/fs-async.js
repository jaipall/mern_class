const fs = require("node:fs");
console.log("-------start------");
fs.readFile("./temp.text", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err.message);
  } else {
    console.log("temp-->", data);
  }
});

console.log("----------mid---------");

fs.readFile("./student.text", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err.message);
  } else {
    console.log("Student-->", data);
  }
});

console.log("------end---------");
