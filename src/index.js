require('dotenv').config();
const app = require('./server');
require("./database")

app.listen( app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}!`));