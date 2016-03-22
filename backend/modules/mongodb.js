var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myAppDB');

var db = mongoose.connection
	.on('error', console.error.bind(console, 'connection error:'))
	.once('open', function() {
		console.log("we're connected!");
	});

module.exports = db;