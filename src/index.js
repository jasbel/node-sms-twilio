require('dotenv').config();

const http = require('http');
const app = require('./server');
const server = http.createServer(app);

require("./database");
require('./sockets').connection(server);

server.listen( app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}!`));