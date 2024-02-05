const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/calculate", (req, res) => {
  const { expression } = req.body;

  res.json(eval(expression));
});

app.listen(8000, () => {
  console.log("App is up & running");
});
