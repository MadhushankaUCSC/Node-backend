var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;

};

userSchema.methods.validatePassword = async (password, passwordInDb) => {
    const validationStatus = await bcrypt.compare(password, passwordInDb);
    return validationStatus;
}

module.exports = mongoose.model('users', userSchema);