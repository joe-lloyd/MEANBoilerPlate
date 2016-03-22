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

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/users', function(req, res){
    res.json({users:{name: 'bob', age:6}, durp:{name: 'bob', age:6}});
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;