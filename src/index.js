const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 3000;

const ContactRouter = require('./routes/contact.routes')
const InfoComponentRouter = require('./routes/infoComponent.routes')

app.use(express.json());
app.use(cors());

const connectDB = require('./DB/mongo');

connectDB();

app.use('/portfolio', ContactRouter);
app.use('/portfolio',InfoComponentRouter)
app.get('/', (req, res) => {
    res.send('¡Hola, bienvenido!');
});

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});