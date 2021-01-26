const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const app = express();

const port = 3006;

/**
 * path.join => buscara ka direccion
 * app.engine => motor de plantilla para handlebar u otros
 */

/** Settings */
app.set('port', process.env.PORT || port)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./libs/handlebars')
}));
/** Establece el generdor de plantilla hbs to html */
app.set('view engine', '.hbs')

/** Middlewares 
 * morgan: ver peticiones en consola
 * e.json(): convertir peticiones a JSON
 * urlencoded: entender form para json
 * 
*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/** Routes */
app.use(require('./routes/index.routes'))

/** Static Files */
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;