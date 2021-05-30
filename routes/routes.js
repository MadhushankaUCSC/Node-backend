var express = require('express');
var productController = require('../src/products/productController');
var userController = require('../src/user/userController');

var router = express.Router();


//user routes
router.route('/user/create')
    .post(userController.createUser);

//user login routes
router.route('/user/login')
    .post(userController.loginUser);

//products routes
router.route('/product/allproducts')
    .get(productController.getAllProducts);

router.route('/product/createproduct')
    .post(productController.createProduct);


module.exports = router;