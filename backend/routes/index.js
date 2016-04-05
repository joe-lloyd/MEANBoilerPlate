
module.exports = function(app){

	var page 	= require('./page');
	var user 	= require('./user');

	app.use('/api', page);
	app.use('/api', user);

};