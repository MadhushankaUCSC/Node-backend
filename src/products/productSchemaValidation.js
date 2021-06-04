var joi = require('joi');
var commonResponseService = require('../../services/responseService');

var createSchema = joi.object().keys({
    item: joi.string().required(),
    qty: joi.string().required(),
    price: joi.number().required()
});

module.exports.validationProductData = (request, response, next) => {
    var result = createSchema.validate(request.body);
    if (result.error) {
        commonResponseService.errorWithMessage(response, result.error.details[0].message)

    } else {
        next();
    }
}


