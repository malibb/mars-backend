const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://<DB.NAME>:<PASSWORD>@cluster0-ifxvi.mongodb.net/test?retryWrites=true';
 mongoose.connect(
    mongo_uri,
    { useNewUrlParser: true },
    (err) => {
        return err 
            ? console.log('Hubo un error al conectar con la DB.')
            : console.log('¡Conexión exitosa con Mongo Atlas!');
    }
);