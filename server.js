const express = require("express");
const { request } = require("http");
const bodyparser = require("body-parser");

const app =express();

app.use(bodyparser.urlencoded({extended : true}));

app.get("/",function(request,response){
    response.sendFile(__dirname+"/calculator.html");
});

app.post("/",function(request,response){
    var num1=Number(request.body.num1);
    var opt=request.body.select;
    var num2=Number(request.body.num2);
     if(opt=="+"){
         var res=num1+num2;
        }
    else  if(opt=="-"){
            var res=num1-num2;
           }
    else    if(opt=="/"){
            var res=num1/num2;
           }
    else if(opt=="*"){
            var res=num1*num2;
           }
    response.send("Answer of "+ opt +" is="+res);
});


app.listen(3000,function(){
    console.log("Server started at 3000");
});
