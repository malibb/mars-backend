const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Id Home, Id User


const HomeSchema = new Schema({

	description : {
        type    : String,
        required: true
    },
    address     : {
        type    : String,
        required: true
    },
    cords_lat   : {
        type    : String,
    },
    ccords_lon  : {
        type    : String,
    },
    services    : {
        type    : String
    },
    owner_email : {
        type    : String,
        required: true
    },
    active      : {
        type    : Boolean,
        required: true,
        default : true,

    }
}, { 'collection': 'Home', 'timestamps': true });

const Home = mongoose.model('Home', HomeSchema);
module.exports = Home;