// Conexión a base de datos
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

// Configuración para cifrar password
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10

// Modelo Usuario

const UserSchema = new Schema({
	first_name   : {
        type    : String,
        required: true
    },
    last_name   : {
        type    : String,
        required: true
    },
    email       : {
        type    : String,
        unique  : true,
        required: true
    },
    password    : {
        type    : String,
        required: true
    },
    gender      : {
        type    : String,
        enum    : ["Hombre", "Mujer"]
    },
    birthDate   : {
        type    : Date
    },
    
    tel         : {
        type    : String
    },
    language    : {
        type    : String
    },
    address     : {
        type    : String
    },
    description : {
        type    : String
    },
    photo       : {
        type    : String
    },
    is_active   : {
        type    : Boolean,
        default : true,
        required: true
    }
}, { 'collection': 'User', 'timestamps': true });


// https://mongoosejs.com/docs/middleware.html#pre
UserSchema.pre('save', function (next) {

    // Documento a revisar/modificar
    let user = this

    // Si el documento no modifica/crea password, continuamos 
    if (!user.isModified('password')) { return next(); }

    // De lo contrario, encriptamos el password del usuarioy lo seteamos al documento (user) que se guardará
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err)
        bcrypt.hash(user.password, salt, async function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
});

// Agregamos un método para comparar contraseñas
UserSchema.methods.comparePassword = function (candidate, cb) {
    console.log(this.password)
    bcrypt.compare(candidate, this.password, function (err, isMatch) {
        cb(err, isMatch)
        
    })
}


module.exports = mongoose.model('User', UserSchema);