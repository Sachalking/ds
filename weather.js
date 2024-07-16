const express = require("express");
const https =require("https");

 var app =express();

 app.get("/",function(request,response){

    var url="https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=bdfcacb7a9e7918c4ff6f2fa9e197d7c";
   

    https.get(url,function(res){
        console.log(res.statusCode);

        res.on("data",function(data){
            var weatherdata=JSON.parse(data)
            var temp=weatherdata.main.temp;
            var weather=weatherdata.weather[0].description;

            var icondata=weatherdata.weather[0].icon;

            var icon="https://openweathermap.org/img/wn/"+icondata+"@2x.png"
            response.write("<p> "+temp+"</p>");
            response.write("<h1> "+weather+"</h1>");
            response.write("<img src="+icon+">");
            response.send()
        });

    });
      
 });

 app.listen(3001,function(){
    console.log("Server started at 3001");
 });