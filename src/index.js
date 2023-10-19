const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

app.use(express.json());

const connectDB = require('./DB/mongo');

connectDB();

app.get('/', (req, res) => {
    res.send('¡Hola, bienvenido!');
});

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});