require('dotenv').config();
const InfoComponent = require('../models/infoComponent.model');

const validToken = process.env.VALID_TOKEN;

const createInfoComponent = async (req, res) => {
    const { token } = req.body;
    if (token !== validToken) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const newInfoComponent = await InfoComponent.create(req.body);
        res.status(201).json({ message: 'Información enviada correctamente', infocomponent: newInfoComponent });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el información', error: error.message });
    }
};

const getInfoComponents = async (req, res) => {
    try {
        const InfoComponents = await InfoComponent.find();
        res.status(200).json(InfoComponents);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching info', error: error.message });
    }
};

module.exports = {
    createInfoComponent,
    getInfoComponents
};