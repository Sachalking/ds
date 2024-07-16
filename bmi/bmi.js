const express = require("express");
const { request } = require("http");
const bodyparser = require("body-parser");


var app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.post("/",function(request,response){

});

app.get("/",function(request,response){
   response.sendFile(__dirname,"/bmi/bmi.html");
});

app.listen(3400,function(){
    console.log("Server start");
});