var userModel = require('./userModel');
module.exports.createUserFunc = (requestData) => {
    return new Promise(async (resolve, reject) => {

        console.log(requestData);
        var userModelData = new userModel();
        userModelData.name = requestData.name;
        userModelData.email = requestData.email;
        userModelData.password = await userModelData.encryptPassword(requestData.password);

        userModelData.save((error, dataVal) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                // resolve(dataVal);
                resolve("user added to database successfully");
            }
        });

    });

}

/**
 * check user credintials
 * @param {*} requestData user entered data
 * @returns 
 */
module.exports.loginUserFunc = (requestData) => {
    return new Promise((resolve, reject) => {

        console.log(requestData);
        console.log("inside service");


        userModel.findOne({ email: requestData.email }, async function (error, dataVal) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                if (dataVal != undefined || dataVal != null) {
                    var userModelData = new userModel();
                    let passwordValidationStatus = await userModelData.validatePassword(requestData.password, dataVal.password);
                    if (passwordValidationStatus) {
                        resolve({ status: true, mesg: "valid user" });
                    } else {
                        resolve({ status: false, mesg: "invalid user password" });
                    }
                    // resolve(dataVal);
                } else {
                    resolve({ status: false, mesg: "can not found user" });
                }


            }
        });

    });

}