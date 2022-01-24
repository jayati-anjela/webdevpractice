const express = require("express");
const fs = require("fs");

const app = express();

let indexHTML = fs.readFileSync("index.html", "utf-8");
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.status(400).send(indexHTML); // status(400) mean if there is any problem this status will show
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.w); // if we don't use Number(), the req.body.num1 gets parsed as a string
  var num2 = Number(req.body.h);

  var result = num1/(num2*num2);
  res.send("Your BMI is: " + result);
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
