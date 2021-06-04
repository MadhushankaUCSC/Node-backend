var express = require('express');
var productController = require('../src/products/productController');
var userController = require('../src/user/userController');

//data validations
var validateSchema = require('../src/products/productSchemaValidation');

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
    .post(validateSchema.validationProductData, productController.createProduct);

//products update routes
router.route('/product/updateproduct/:id')
    .patch(productController.updateProduct);

//products delete routes
router.route('/product/deleteproduct/:id')
    .delete(productController.deleteProduct);

module.exports = router;