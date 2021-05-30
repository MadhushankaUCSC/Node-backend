var userService = require('./userService')
var commonResponseService = require('../../services/responseService');
async function createUser(request, response) {
    try {
        var createUser = await userService.createUserFunc(request.body);
        console.log(createUser);
        commonResponseService.responseWithData(response, createUser);

    } catch (error) {
        console.log(error);
        commonResponseService.errorWithMessage(response, "something went wrong");
    }
}

async function loginUser(request, response) {
    try {
        var loginUserStatus = await userService.loginUserFunc(request.body);

        console.log("inside controller");
        console.log(loginUserStatus);
        if (loginUserStatus.status) {
            commonResponseService.successWithMessage(response, loginUserStatus.mesg);
        } else {
            commonResponseService.errorWithMessage(response, loginUserStatus.mesg);
        }


    } catch (error) {
        console.log(error);
        commonResponseService.errorWithMessage(response, "something went wrong");
    }
}

module.exports = { createUser, loginUser };