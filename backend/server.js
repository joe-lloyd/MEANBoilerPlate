// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var mongoose = require('mongoose');
var app        = express();                 // define our app using express
var path = require('path');

var conf = require('./modules/serverConf.js')(app, express, __dirname);
var user = require('./models/user.js');
var auth = require('./modules/auth.js')(app, user);
var routes = require('./routes/index');

app.use('/api', routes);

var db = require('./modules/mongodb.js');		// getting the connectionto the database via a self made module


// this comes last so as not to mess with our api
app.all('/*', function(req, res) {

	res.sendFile(path.resolve(__dirname + '/../frontend/index.html'));
	
});

app.listen(3000);
