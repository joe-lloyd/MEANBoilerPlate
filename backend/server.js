// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var mongoose = require('mongoose');
var app        = express();                 // define our app using express

var conf = require('./modules/serverConf.js')(app);
var user = require('./models/user.js');
var auth = require('./modules/auth.js')(app, user);
var routes = require('./routes/index');

app.use('/api', routes);

var db = require('./modules/mongodb.js');		// getting the connectionto the database via a self made module

app.listen(3000);
