const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

const ContactRouter = require('./routes/contact.routes')

app.use(express.json());

const connectDB = require('./DB/mongo');

connectDB();

app.use('/portfolio', ContactRouter);
app.get('/', (req, res) => {
    res.send('¡Hola, bienvenido!');
});

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});