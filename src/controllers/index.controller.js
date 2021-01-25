const sms = require("../models/sms");
const { sendMessage } = require("../twilio/sendSms");

const indexController = async (req, res) => {
    /** lean: convierte formato Bson a Json */
    const messages = await SMS.find().lean();
    messages.forEach(m => console.log(m.Body));
    res.render('index', { messages, defaultPhone, name })
}

const postMessage = async (req, res) => {

        const { message, phone } = req.body;
    
        if(!message || !phone) return res.json('Missing message or phone');
    
        const result = await sendMessage(req.body.message, req.body.phone);
    
        console.log(result);
    
        await sms.create({Body: req.body.message, To: req.body.phone});
    
        res.redirect("/");
    
}

const reciveMessage = (req, res) => {
    console.log(req.body);
    res.send('received')
}

module.exports = {
    indexController,
    postMessage,
    reciveMessage
}