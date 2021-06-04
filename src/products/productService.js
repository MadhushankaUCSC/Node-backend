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

module.exports.updateProductFunc = (id, requestData) => {
    return new Promise((resolve, reject) => {

        console.log(requestData);
        console.log(id);


        productsModel.findByIdAndUpdate(id, requestData, (error, dataVal) => {
            if (error) {
                console.log(error);
                reject({ status: false, message: "product not updated successfully" });
            } else {
                // resolve(dataVal);
                resolve({ status: true, message: "product updated successfully" });
            }
        });

    });

}

module.exports.deleteProductFunc = (id) => {
    return new Promise((resolve, reject) => {

        //console.log(requestData);
        //console.log(id);


        productsModel.findByIdAndDelete(id, (error, dataVal) => {
            if (error) {
                console.log(error);
                reject({ status: false, message: "product not Deleted successfully" });
            } else {
                // resolve(dataVal);
                resolve({ status: true, message: "product deleted successfully" });
            }
        });

    });

}