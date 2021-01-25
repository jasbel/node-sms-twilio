const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

/**
 * Send an SMS message
 * @param {string} body The message
 * @param {string} phone The phone number
 */
 
const sendMessage  = async (body, phone) => {
    try {
        const message = await client.messages.create({
            to: phone,
            from:config.phone,
            body
        })
        // console.log(message);
        return message;
    } catch (err) {
        console.log(err);
    }
}

// sendMessage();

module.exports={sendMessage}