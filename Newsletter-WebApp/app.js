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

app.post("/", function(req,res) {

  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var emailid = req.body.email;

  console.log(firstName, lastName, emailid);
});















app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
