// BASE SETUP
// =============================================================================

// call the packages we need
var express 	= require('express'); 	// call express
var app			= express(); 			// define our app using express
var path 		= require('path');		// get path to help resolve concat urls

// custom modules and modles defined
var conf 	= require('./modules/serverConf.js')(app, express, __dirname);
var user 	= require('./models/user.js');
var auth 	= require('./modules/auth.js')(app, user);
var routes 	= require('./routes/index')(app);

// app.use('/api', routes);

// database connection via a custom module
var db = require('./modules/mongodb.js');	// getting the connectionto the database via a self made module

// this comes last so as not to mess with our api
app.all('/*', function(req, res) {

	res.sendFile(path.resolve(__dirname + '/../frontend/index.html'));
	
});

// run app from port 3000
app.listen(3000, function(){
	console.log('connected on port 3000');
});
