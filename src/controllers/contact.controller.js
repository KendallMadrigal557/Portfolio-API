require('dotenv').config();
const Contact = require('../models/contact.model');

const validToken = process.env.VALID_TOKEN;

const createContact = async (req, res) => {
    const { token } = req.body;
    if (token !== validToken) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json({ message: 'Contacto enviado correctamente', contact: newContact });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el contacto', error: error.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error: error.message });
    }
};

module.exports = {
    createContact,
    getContacts
};