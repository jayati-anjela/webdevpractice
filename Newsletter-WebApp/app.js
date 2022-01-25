const express = require("express");
const https = require("https");

const app = express();

// parsing using express
app.use(express.urlencoded({extended: true}));
// sets folder public as root (?) directory
app.use(express.static(__dirname));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});















app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
