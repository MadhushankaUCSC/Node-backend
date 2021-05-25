var productsModel = require('./productModel');

module.exports.getProducts = () => {
    return new Promise((resolve, reject) => {
        productsModel.find({}, (error, dataValue) => {
            if (error) {
                reject(error);
            } else {
                resolve(dataValue);

            }
        });
    })

}

module.exports.createProductFunc = (requestData) => {
    return new Promise((resolve, reject) => {

        console.log(requestData);
        var productsModelData = new productsModel();
        productsModelData.item = requestData.item;
        productsModelData.qty = requestData.qty;
        productsModelData.price = requestData.price;

        productsModelData.save((error, dataVal) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                // resolve(dataVal);
                resolve("product added to database successfully");
            }
        });

    });

}