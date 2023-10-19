const express = require('express');
const router = express.Router();

const ContactController = require('../controllers/contact.controller')


router.post('/contact', ContactController.createContact);
router.get('/contact', ContactController.getContacts);

module.exports = router;