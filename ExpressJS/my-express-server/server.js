
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  response.send("Hello");
});

app.get("/contact", function(req, res) {
  response.send("Contact me at: xyz@fictionalmail.com");
});

app.get("/about", function(req, res) {
  response.send("I am a prefinal student currently dabbling in various bits such as web development, finance, UI/UX design, graphic design, and personal-development books!");
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
