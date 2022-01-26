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
  const server = "us20";
  const audienceID = "86b6d1e0ff";
  const url = "https://" + server + ".api.mailchimp.com/3.0/lists/" + audienceID;

  const options = {
    method: "POST",
    auth: "juno1:443ebf98b682926e8db7865fd46d2ab7-us20"
  };

const request = https.request(url, options, function (response) {

  if(response.statusCode === 200){
    res.send("Successfully subscribed!");
  } else {
    res.send("There was an error with signing up, please try again!");
  }

  response.on("data", function (data) {
    console.log(JSON.parse(data));
  });
});

request.write(jsonData);
request.end();
});





/*
API KEY -> 443ebf98b682926e8db7865fd46d2ab7-us20 */
/*
LIST ID -> 86b6d1e0ff */















app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
