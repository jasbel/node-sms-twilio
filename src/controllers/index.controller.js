const { sendMessage } = require("../twilio/sendSms");
const SMS = require('../models/sms');

const MessagingResponse = require('twilio').twiml.MessagingResponse;

const { getSocket} = require('../sockets');

//TODO: only testing
const {defaultPhone, name} = require('../config');

const indexController = async (req, res) => {
    /** lean(): convierte formato Bson a Json 
     *  sort() : ordenar por fecha de creacion, (-) desde el ultimo registro hasta el mas viejo
    */
    const messages = await SMS.find().sort('-createdAt').lean();
    messages.forEach(m => console.log(m.Body));
    res.render('index', {messages, defaultPhone, name})
}

const postMessage = async (req, res) => {

    const { message, phone } = req.body;

    if(!message || !phone) return res.json('Missing message or phone');

    const result = await sendMessage(req.body.message, req.body.phone);

    console.log(result);

    await SMS.create({Body: req.body.message, To: req.body.phone});

    res.redirect("/");
}

const receiveMessage = async (req, res) => {
    /** recupera el mensaje enviado desde el celular */
    console.log(req.body);

    /** Guarda el mensaje enviado desde el celular hacia nuestra base de datos */
    const saveSMS = await SMS.create({
        Body: req.body.Body,
        From: req.body.From,
    })

    /** Emitir evento con el socket y enviar el mensaje  */
    getSocket().emit('new message', saveSMS)

    /** Twilio responde al mensaje enviado, al mismo celular */
    const twiml = new MessagingResponse();
    // twiml.message('This is my response')

    res.send(twiml.toString())
}

module.exports = {
    indexController,
    postMessage,
    receiveMessage
}