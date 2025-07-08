const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "day16",
  })
  .then(() => {
    console.log("---------DB Connected-------------");
  })
  .catch((err) => {
    console.log("--------DB Connection error------------");
    console.log(err.message);
  });
