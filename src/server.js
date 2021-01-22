const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

/** Settings */

/** Middlewares */

/** Routes */

/** Static Files */

module.exports = app;