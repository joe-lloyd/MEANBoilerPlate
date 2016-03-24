var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var Dawg = require('../models/dog');
var router = express.Router();

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

	console.log(req.body);

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
			status: 'Login successful!'
			});
		});
	})(req, res, next);
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