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

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const emailid = req.body.email;


  const data = {
    members: [
      {
        email_address: emailid,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data); // turns data into json format
  const server = ""; // add server (end of the api key after the dash part)
  const audienceID = ""; // add list id here
  const url = "https://" + server + ".api.mailchimp.com/3.0/lists/" + audienceID;

  const options = {
    method: "POST",
    auth: "juno1: " // add full apikey after the :
  };

const request = https.request(url, options, function (response) {

  if(response.statusCode === 200){
    res.sendFile(__dirname + "/success.html");
  } else {
    res.sendFile(__dirname + "/failure.html");
  }

  response.on("data", function (data) {
    // console.log(JSON.parse(data));
  });
});

request.write(jsonData);
request.end();
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});











app.listen(process.env.PORT || 3000, function() { // process.env.PORT is keyword for dynamic port, || is or so this line listens both on heroku and on our 3000 port
  console.log("Server is running on port 3000.")
});
