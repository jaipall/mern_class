// const https = require("http");

// const app = https.createServer((req, res) => {
//   console.log("req recived");
//   //   console.log(Object.values(req));
//   if (req.method == "GET") {
//     const obj = { name: "Jaipal", city: "Agra" };
//     res.end(JSON.stringify(obj, null, 4));
//   }
//   console.log(Object.keys(req));

//   res.end("Helloooo");
// });

// app.listen(2700, () => {
//   console.log("Server is running");
// });

// --------------------------------------------------

// const https = require("http");

// const app = https.createServer((req, res) => {
//   console.log("req recived");
//   //   console.log(Object.values(req));
//   if (req.method == "GET") {
//     const obj = { name: "Jaipal", city: "Agra" };
//     res.end(JSON.stringify(obj, null, 4));
//   } else {
//     console.log(Object.keys(req));
//     res.end("work in progress.");
//   }
// });

// app.listen(2700, () => {
//   console.log("Server is running");
// });

// -------------------------------------------

const https = require("http");

const app = https.createServer((req, res) => {
  console.log("req recived", req.url);
  res.setHeader("Content-Type", "application/json");
  //   console.log(Object.values(req));
  if (req.method == "GET") {
    switch (req.url) {
      case "/api/v1/students": {
        const obj = {
          isSuccess: true,
          message: "Student list",
          data: { name: "Jaipal", city: "Agra" },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      case "/api/v1/products": {
        const obj = {
          isSuccess: true,
          message: "Product list",
          data: { title: "Mixer", cost: 3000, category: "Electronic" },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      default: {
        res.end({
          isSuccess: false,
          message: "Invalid API endpoint",
        });
      }
    }
  } else {
    console.log(Object.keys(req));
    res.end("work in progress.");
  }
});

app.listen(2700, () => {
  console.log("Server is running");
});
