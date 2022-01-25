// not running / testing this segment

 const express = require("express");
 const https = require("https");

 const app = express();

 // parsing using express
 app.use(express.urlencoded({entended: true}));


 app.get("/", function(req, res){

   res.sendFile(__dirname + "index.html");
 });

 app.post("/", function(req, res) {

   // in lec 246 we divide the url into consts
   const query = req.body.cityName // here cityName is the token we get from our html (client side)
   const APIkey = ""
   const unit = "metric"
   // these key and values replace the parameters in the url
   const url = "url of the website";

   https.get(url, function(response) {
     console.log(response.statusCode);

     response.on("data", function(data){
       const weatherData = JSON.parse(data);
       const temp = weatherData.main.temp;
       const weatherDescription = weatherData.weather[0].description;
       res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
       res.write("It is currently a " + weatherDescription + "weather");

       const icon = weatherData.weather[0].icon;
       const imageURL = "url (endpoint)" + icon + "@2x.png";
       res.write("<img src=" + imageURL + ">");
       res.send();

     })
   })
 })

 app.listen(3000, function() {
   console.log("Server is running on port 3000.")
 });
