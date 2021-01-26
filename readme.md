### user access
https://www.twilio.com/
<!--- Comment
  user: iiotatlas.test@gmail.com
  pass: AtlasAutomation
  sid: ACdd21186fad14c9ff7ba227bfeedef952
  token: c8da169fd1b3f78cfcb5cd3e2b7fb07f
  phone: +14154296202
-->

## Dependencias
|  |  |
| --- | --- |
| express-handlebars | parecido a pug |
| morgan | para ver peticiones en consola |
| timeago.js | Convierte la fecha en formato natural |
| twilio | para SMS |
| mongoose |  |
| express |  |
| socket.io |  |
|  |  |
| dotenv |  |
| nodemon |  |

> npm i -D <dependencias de desarrollo>
> https://prnt.sc/xgun5d

### Servidor o tunel HTTP|
ngrok.- se tiene que correr en paralelo npm run dev
```cmd
  ngrok.exe http 3006
```

<!---
email: dreik.elm.mec@gmail.com
pass: Miromero777777
TWILIO_ACCOUNT_SID=AC06c6a93ab334ffb3c615255605614510
TWILIO_AUTH_TOKEN=d03d05163bc9f64e1cf8effc737c44a0
PHONE=+13852573363
DEFAULT_PHONE=+59165377811
DEFAULT_NAME=Dixon Apaza

***************************************
email: dreik.elm.mec.game2@gmail.com
pass: Camitas7777777
TWILIO_ACCOUNT_SID=ACa2adbf7e20e45d42a5acde7c9e25e576
TWILIO_AUTH_TOKEN=d60994acc59bf8a34b183d6fbd503613
PHONE=+15592064312
DEFAULT_PHONE=+59172232563
DEFAULT_NAME=Erik Ticonipa

***************************************
email: iiotatlas.test@gmail.com
pass: AtlasAutomation
repass:9untYBleuL_i0hpb2hNU64lK3YELG5RH2lpmdLZp
TWILIO_ACCOUNT_SID=ACdd21186fad14c9ff7ba227bfeedef952
TWILIO_AUTH_TOKEN=6329276a2be24ddc5d3beb4ad5e0b2d1
PHONE=+14154296202
DEFAULT_PHONE=+59168499480
DEFAULT_NAME=Asbel Apaza

***************************************
email: iiotatlas@gmail.com
pass: AtlasAutomation
repass:9untYBleuL_i0hpb2hNU64lK3YELG5RH2lpmdLZp
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
PHONE=
DEFAULT_PHONE:+59168499480
DEFAULT_NAME=Asbel Apaza
--->

# Node SMS APP with Twilio
this is an simple example to send and recive SMS using Node, Twilio, Mongodb, and Socket.io
![](./screenshot.png)

# Required Software
* Nodejs
* Mongodb
* ngrok (in development). Twilio needs a domain to reach our server.

# Installation
clone the repo
```shell
  git clone https://github.com/FaztTech/sms-node
  cd sms-node
```
create a file with the name `.env` in the root project with the following Environment variables:
```text
  TWILIO_ACCOUNT_SID=<YOUR TWILIO ACCOUNT SID>
  TWILIO_AUTH_TOKEN=<YOUR TWILIO AUTH TOKEN>
  PHONE_NUMBER=<THE TRIAL PHONE NUMBER OF YOUR TWILIO PROJECT>
```
then execute:
```shell
  npm i
  npm start # or npm run dev (to execute with nodemon)
```

# Environment variables
* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN
* PHONE_NUMBER
* PORT (optional)

# Useful Resources
* [Herok Patterns - Signal Pattern](https://www.heropatterns.com/)
* ngrok
* [Request body inbound Twilio SMS](https://www.twilio.com/docs/sms/twiml#twilios-request-to-your-application)
* https://www.twilio.com/docs/usage/webhooks/sms-webhooks

# Issues
* https://stackoverflow.com/questions/59753149/express-handlebars-wont-render-data
* https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
* https://stackoverflow.com/questions/59690923/handlebars-access-has-been-denied-to-resolve-the-property-from-because-it-is

# TODO
* [ ] add authentication
* [ ] handle multiple sockets connection
* [ ] integrate Docker 
* [ ] add tests
* [ ] create a contact list
* [ ] pick a user from the message history to send a message
