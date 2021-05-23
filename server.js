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

// const { request, response } = require('express');
// var express = require('express');
// var server = express();
// server.use(express.json());
// var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/mynode", { useNewUrlParser: true }, (err, client) => {
//     if (err) {
//         console.log("database connection error...\n", err);

//     } else {
//         console.log("successfully connected to database");


//     }
// });



// server.listen(3000, (error) => {
//     if (error) {
//         console.log(error);

//     } else {
//         console.log("server listening")
//     }
// });

// server.get('/test', (request, response) => {
//     response.send({
//         status: true,
//         data: "new"
//     });
// });

// server.post('/user/create', (request, response) => {
//     console.log(request.body);
//     response.send(request.body);
// });

const { request, response } = require('express');
var express = require('express');
var server = express();
server.use(express.json());
var mongoose = require('mongoose');
var productsModel = require('./productModel');
mongoose.connect("mongodb://localhost:27017/mynode", { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log("mongodb connection error:", error);
    } else {
        console.log("database connection successfull");
    }
});

/**
 * create a connect with server
 */
server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server litening");
    }
});

server.get('/test', (request, response) => {
    response.send({
        status: true,
        data: "successfull....."
    });
});


/**
 * insert new product to database and get all the products in database
 */
server.post('/createProducts', (req, res) => {
    var productsModelData = new productsModel();
    productsModelData.item = "pen";
    productsModelData.qty = 10;
    productsModelData.price = 150;
    productsModelData.save((error, dataval) => {
        if (error) {
            console.log(error);
        } else {
            var products = productsModel.find({}, (err, dataValue) => {
                if (err) {
                    res.send({
                        status: false,
                        data: err
                    });
                } else {
                    res.send({
                        status: true,
                        data: dataValue
                    });
                }
            });
        }
    });



});

/**
 * create new user
 */
server.post('/user/create', (req, res) => {
    console.log(req.body);
    res.send("user created successfully");
});