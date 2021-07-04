const express = require("express");
const app = express();
const Questions = require("./Routes/question");
const Category = require("./Routes/category");
const Subcategory = require("./Routes/subcategory");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./initDB");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // '*' for any
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    return res.status(200).json({});
  }

  next();
});

app.use("/questions", Questions);
app.use("/category", Category);
app.use("/subcategory", Subcategory);

// For Support Cross Origin Request

app.listen(3001, () => {
  console.log("api started");
});
