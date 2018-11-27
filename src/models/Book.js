const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Id Book, Id home, Id Usuario_Cliente, Fecha, soloImporte(ImporteDía, CostoTotal si acabamos el proyecto)

const bookSchema = new Schema({
    reservations	: {
        dateStart	: Date,
        dateEnd		: Date,
        dateReserv	: { 
            type: Date, 
            default: Date.now,
        },
    }
});