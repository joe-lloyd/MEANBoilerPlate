var bodyParser = require('body-parser');
var morgan = require('morgan'); 
// var path = require('path');

module.exports = function(app, express, dir){

	// crossdomain functionality nolonger required (comment out in production)
	var allowCrossDomain = require('./crossDomain.js');
	app.use(allowCrossDomain);

	//log all the things with morgan
	app.use(morgan('combined'));

	// parse our body data for use in routes
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	//serve our frontend as a static app
	app.use(express.static( dir + '/../frontend'));
	
};