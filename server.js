// const { request, response } = require('express');
// var express=require('express');
// var server=express();

// server.get('/test',(request,response)=>{
//     response.send({
//         status:true,
//         data:"Successfull"
//     });
// });

// /**
//  * server coonection
//  */
// server.listen(3000,(error)=>{
//     if(error){
//         console.log("Error");
//     }else{
//         console.log("server started");
//     }
// });

const { request, response } = require('express');
var express = require('express');
var server = express();
server.use(express.json());
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mynode", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log("database connection error...\n", err);

    } else {
        console.log("successfully connected to database");
    }
});



server.listen(3000, (error) => {
    if (error) {
        console.log(error);

    } else {
        console.log("server listening")
    }
});

server.get('/test', (request, response) => {
    response.send({
        status: true,
        data: "new"
    });
});

server.post('/user/create', (request, response) => {
    console.log(request.body);
    response.send(request.body);
});