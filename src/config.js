require('dotenv')

module.exports = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phone: process.env.PHONE,
    name: process.env.DEFAULT_NAME,
    defaultPhone: process.env.DEFAULT_PHONE
}