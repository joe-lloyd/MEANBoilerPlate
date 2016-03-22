var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
	name: 	String,
	age: String,
	sex: String
});

module.exports = mongoose.model('Dog', dogSchema);
