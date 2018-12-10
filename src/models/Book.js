const mongoose = require('mongoose');
const Schema = mongoose.Schema



//Id Book, Id home, Id Usuario_Cliente, Fecha, soloImporte(ImporteDía, CostoTotal si acabamos el proyecto)



const BookSchema = new Schema({

	owner_email : {
        type    : String,
        required: true
    },
    date_start     : {
        type    : String,
        required: true
    },
    date_end : {
        type    : String,
        required: true
    }
});