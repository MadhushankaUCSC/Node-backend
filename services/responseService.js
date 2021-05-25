module.exports.responseWithData = (response, dataVal) => {
    return response.send({
        status: true,
        data: dataVal
    });
}


module.exports.errorWithMessage = (response, error) => {
    return response.send({
        status: false,
        message: error
    });
}

