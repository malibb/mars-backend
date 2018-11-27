const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
	name		: {
		first	: String,
		last	: String,
    },
    gender      : String,
    birthDate	: Date,
    email		: String,
    tel         : String,
    language    : String,
    //monedaPreferida
    address     : String,
    description : String,
    photo       : String
});

const User = mongoose.model('User', userSchema);
module.exports = User;