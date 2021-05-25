
var productService = require('./productService');
var commonResponseService = require('../../services/responseService');
async function getAllProducts(request, response) {
    try {
        var allProducts = await productService.getProducts();
        console.log(allProducts);
        commonResponseService.responseWithData(response, allProducts);

    } catch (error) {
        console.log(error);
        commonResponseService.errorWithMessage(response, "something went wrong");
    }


}


async function createProduct(request, response) {
    try {
        var productSaveStatus = await productService.createProductFunc(request.body);
        console.log(allProducts);
        commonResponseService.responseWithData(response, productSaveStatus);

    } catch (error) {
        console.log(error);
        commonResponseService.errorWithMessage(response, "something went wrong");
    }


}



module.exports = { getAllProducts, createProduct };