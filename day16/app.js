// const express = require("express");

// require("./config/db");

// const { Product } = require("./models/product_schema.js");

// const app = express();
// app.use(express.json()); //this will convey to express-js to read the body pf the request in the json format
// app.get("/", (req, res) => {
//   res.status(200);
//   res.json({
//     isSuccess: true,
//     message: "Server is running ...",
//     data: {},
//   });
// });

// app.post("/api/v1/products", async (req, res) => {
//   try {
//     const data = req.body;
//     const newProduct = await Product.create(data); //create a document in db
//     res.status(201);
//     res.json({
//       isSuccess: true,
//       message: "Product create",
//       data: {
//         product: newProduct,
//       },
//     });
//   } catch (err) {
//     console.log("----error occured in post product----");
//     console.log(err.message);

//     if (err.name == "validationError") {
//       res.status(400);
//       res.json({
//         isSuccess: false,
//         message: err.message,
//         data: {
//           errMessage: err.message,
//         },
//       });
//     } else {
//       res.status(500);
//       res.json({
//         isSuccess: false,
//         message: "Internal Server Error",
//         data: {
//           errMessage: err.message,
//         },
//       });
//     }
//   }
// });

// app.listen(2900, () => {
//   console.log("Server Started");
// });

// ---------------------------------------------------------------------

const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");

require("./config/db");

const { Product } = require("./models/product_schema.js");

const app = express();
app.use(express.json()); //this will convey to express-js to read the body pf the request in the json format
app.get("/", (req, res) => {
  res.status(200);
  res.json({
    isSuccess: true,
    message: "Server is running ...",
    data: {},
  });
});

app.get("/api/v1/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200);
    res.json({
      isSuccess: true,
      message: "Product fetched",
      data: {
        products: allProducts,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});

app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product.create(data); //create a document in db
    res.status(201);
    res.json({
      isSuccess: true,
      message: "Product create",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log("----error occured in post product----");
    console.log(err.message);

    if (err.name == "validationError") {
      res.status(400);
      res.json({
        isSuccess: false,
        message: err.message,
        data: {
          errMessage: err.message,
        },
      });
    } else {
      res.status(500);
      res.json({
        isSuccess: false,
        message: "Internal Server Error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});

app.delete("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedItem = await Product.findByIdAndDelete(productId);

    if (deletedItem == undefined) {
      res.status(400);
      res.json({
        isSuccess: false,
        message: "Invalid product id",
        data: {},
      });
    }

    res.status(204);
    res.json({
      isSuccess: true,
      message: "Product is Deleted",
      data: {
        product: deletedItem,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});

app.listen(2900, () => {
  console.log("Server Started");
});
