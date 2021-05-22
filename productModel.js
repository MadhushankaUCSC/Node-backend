var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        item: {
            type: String,
            required: true
        },
        qty: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    });
module.exports = mongoose.model('products', productSchema);