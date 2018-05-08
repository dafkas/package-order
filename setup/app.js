
require('dotenv').config({ path: './variables.env' });

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('../routes');
const errorHandlers = require('../handlers/errorHandlers');

// init app
const app = express();

// Set public folder
app.use(express.static(path.join(__dirname, '../public')));

//view engine setup. Using Pug in views directory
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// global variables
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle routes
app.use('/', routes);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', err => {
//     console.error(`Error→ ${err.message}`);
// });

module.exports = app;