

const express = require('express'); //generador de aplicación
const app = require('express')();
const mongoController = require('./db/mongoController');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
//app.use(bodyParser.json());
const secretKey= 'Hola';
const PORT = process.env.PORT || 5000;

let verifyToken = (req, res, next )=> {
    const bearerHeader = req.headers['authorization'];

    console.log(req.headers);
    
    if(typeof bearerHeader !== 'undefined'){
        //dividir cabecera espacio
        const bearer =bearerHeader.split(' ');
        //Meidante bearer acceder
        //sacar token de lugar ya en estándar
        const bearerToken = bearer[1];
        //Setter token, agregar propiedad llamada token y dar el bearer

        //Verificación token
        jwt.verify(bearerHeader, secretKey, (err, decoded)=>{
            console.log(err);
            if(!err){
                //token apetición
                req.token = bearerToken;
                //Utilizando middleware
                next();
            } else {
                res.status(401).send({
                    "message": "La autentificación falló."
                })
            }
        });
        // Utilizando el middleware de next
        
    } else {
        res.status(401).send({
            "message": "No tienes permisos"
        })
    }
}


import SERVER from './graphql/schema';

// Middleware: GraphQL
SERVER.applyMiddleware({
    app
  });

app.get('/', (req, res)=>{
    res.send({
        "menssage": "ok"
    });
});


//Checar en que parte de los archivos va la lógica de JWT.
//verifyToken método creado para verificar al usuario.
app.post( '/api/posts', verifyToken ,(req,res)=>{
    res.send({
        "message": "Post Created"
    });
});

app.post('/api/login', (req,res)=>{
      const user = {
         "name":"Malinali",
         "lastName":"Becerril",
         "mail":"malistar98@gmail.com"
     } 
     //jwt.sign({user});
     jwt.sign({user}, secretKey, (err,token)=>{
        res.send({
            "message": "Logeo exitoso",
            "userData" : user,
            "token": token
        });
        //console.log(token);
     });


});

app.listen(PORT, ()=> {
    console.log(`Started Server on port ${PORT}`);
});
