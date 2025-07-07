const fsPromises = require("node:fs/promises");
console.log("---FileStart---");
const main = async () => {
  console.log("-------start------");

  try {
    const response = await fsPromises.readFile("./temp.text", "utf-8");
    console.log(response);
  } catch (err) {
    console.log("can not open file temp", err.message);
  }

  console.log("----------mid---------");

  try {
    const response2 = await fsPromises.readFile("./student.text", "utf-8");
    console.log(response2);
  } catch (err) {
    console.log("cannot open the file student", err.message);
  }

  console.log("------end---------");
};

main();

console.log("---endFile----");
