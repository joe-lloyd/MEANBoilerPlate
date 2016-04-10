var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

var isAuthenticated = function(req,res,next){
	console.log(req.user);
	if(req.user) {
		return next();
	} else {
		return res.status(401).json({
			error: 'User not authenticated'
		});
	}
};


router.get('/checkauth', isAuthenticated, function(req, res){

	res.status(200).json({
		status: 'Login successful!'
	});
});


router.get('/', function (req, res) {
	res.status(401).send('sent home');
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
				status: 'Login successful!'
			});

		});
	})(req, res, next);
});

router.get('/logout', function(req, res){
	req.logOut();

	if (req.user) {

		res.status(300).json({
			status: 'error'
		});
	} else {
		res.status(200).json({
			status: 'logged out'
		});
	}
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