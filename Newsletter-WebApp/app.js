const express = require("express");
const https = require("https");

const app = express();

// parsing using express
app.use(express.urlencoded({entended: true}));

















app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
