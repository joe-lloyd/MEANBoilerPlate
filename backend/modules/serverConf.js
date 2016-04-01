var bodyParser = require('body-parser');
var morgan = require('morgan'); // awesome logger for all our info

module.exports = function(app){

	var allowCrossDomain = require('./crossDomain.js');

	app.use(morgan('combined'));
	app.use(allowCrossDomain);
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
};