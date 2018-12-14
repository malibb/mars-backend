
import express from 'express';
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Atlas cluster connection 
import './database/mongoController';

// Apollo Graphql Server
import ApolloServer from './graphql/schema';

// Middleware: GraphQL
ApolloServer.applyMiddleware({ app });

app.get('/', (req, res) => {
    res.send({"message": "Bienvenido"});
});
app.listen( PORT, () => {
    console.log(`--- Servidor escuchando en el puerto ${PORT} ---`);
});