const { request, response } = require('express');
var express=require('express');
var server=express();

server.get('/test',(request,response)=>{
    response.send({
        status:true,
        data:"den hari"
    });
});

server.listen(3000,(error)=>{
    if(error){
        console.log("Error");
    }else{
        console.log("server started");
    }
});
