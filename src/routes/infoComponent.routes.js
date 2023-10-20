const express = require('express');
const router = express.Router();

const InfoComponentController = require('../controllers/infoComponent.controller')


router.post('/infoComponent', InfoComponentController.createInfoComponent);
router.get('/infoComponent', InfoComponentController.getInfoComponents);

module.exports = router;