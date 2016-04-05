var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var Dawg = require('../models/dog');
var router = express.Router();

function isAuthenticated(req, res, next) {
	console.log(user);
    if (req.user.authenticated)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}

router.get('/', function (req, res) {
	res.status(200).send("worked bitch");
});

router.post('/register', function(req, res) {

	User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
		if (err) throw err;

		passport.authenticate('local')(req, res, function () {
			res.redirect('/');
		});
	});
	
});

router.post('/login', function(req, res, next) {

	passport.authenticate('local', function(err, user, info) {
		
		if (err) {
	  		return next(err);
		}

		if (!user) {
			console.log('immma bitch '+ user);
	  		return res.status(401).json({
				err: info
		  	});
		}

		req.logIn(user, function(err) {

			if (err) {
				return res.status(500).json({
			  		err: 'Could not log in user'
				});
		  	}
		  	
	  		res.status(200).json({
				status: 'Login successful!',
				session: req.session.passport.user
			});

		});
	})(req, res, next);
});

router.get('/checkauth',  function(req, res){

	req.isAuthenticated();

	res.status(200).json({
		status: 'Login successful!'
	});

});

router.get('/users', function(req, res){

	User.find(function(err, users){
		res.json(users); 
	});
});

router.get('/ping', function(req, res){
	res.status(200).send("pong!");
});


module.exports = router;