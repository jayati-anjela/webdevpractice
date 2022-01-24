
const express = require("express");
const fs = require("fs");

const app = express();

let indexHTML = fs.readFileSync("index.html", "utf-8");
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.status(400).send(indexHTML); // status(400) mean if there is any problem this status will show
});

app.post("/", function(req, res) {
  res.send("Thanks for posting that!");
  console.log(req.body);
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
