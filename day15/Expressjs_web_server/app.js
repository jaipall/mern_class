const express = require("express");
const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
} = require("./file-helper");

const filePath = "./local-db.json";

const app = express();

app.use(express.json());
app.get("/api/v1/students", async (req, res) => {
  const StudentArr = await getAllDataFromArrayFromFile(filePath);
  res.json({
    isSuccess: true,
    message: "List of student",
    data: StudentArr,
  });
});

app.post("/api/v1/students", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newObj = await saveObjectToArrayInFile(data, filePath);

    res.status(201);
    res.json({
      isSuccess: true,
      message: "Sudent added successsfully",
      data: newObj,
    });
  } catch {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Invalid Server",
      data: {},
    });
  }
});

// app.get("/api/v1/products", (req, res) => {
//   res.json({
//     isSuccess: true,
//     message: "List of student",
//     data: [
//       {
//         title: "Mixer",
//         cost: 3000,
//       },
//     ],
//   });
// });

app.listen(3000, () => {
  console.log("Server is running");
});
