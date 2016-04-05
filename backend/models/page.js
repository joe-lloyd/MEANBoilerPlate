var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({
	title: 	String,
	text: 	String,
	excerpt: 	String,
	meta: { plus: Number, minus: Number},
	imageUrl: String
});

module.exports = mongoose.model('Page', pageSchema);
