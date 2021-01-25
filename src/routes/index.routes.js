const {Router} = require('express');
const router = Router();

const { sendMessage } = require('../twilio/sendSms');
const SMS = require('../models/sms');

//TODO: only testing
const {defaultPhone, name} = require('../config');

const {indexController, postMessage, reciveMessage} = require('../controllers/index.controller')

//Main Routes
router.get('/', indexController);

//Send an SMS
router.post('/send-sms', postMessage)

router.post('/sms', reciveMessage)

module.exports = router