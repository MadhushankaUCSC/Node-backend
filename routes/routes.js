var express = require('express');
var productController = require('../src/products/productController');

var router = express.Router();






router.route('/product/allproducts')
    .get(productController.getAllProducts);

router.route('/product/createproduct')
    .post(productController.createProduct);


module.exports = router;