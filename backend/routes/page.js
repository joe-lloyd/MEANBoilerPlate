var express = require('express');
var page = require('../models/page');
var router = express.Router();


router.post('/page',function(req, res) { 
	var newPage = new page({
		title: req.body.title,
		text: req.body.text,
		excerpt: req.body.excerpt,
		imageUrl: req.body.imgUrl
		});

	newPage.save(function(err){
		if (err) return console.log(err);

		res.json({saved: true});
	});
});


router.get('/page',function(req, res) {

	page.find({}, function(err, page){
		res.json(page);
	});

});


router.delete('/page/:id',function(req, res) { 

	var page_id = {_id: req.params.id};

	page.findOneAndRemove(page_id, function(err, page){
		if (err) return console.log(err);

		res.json({deleted: true});
	});

});


router.put('/page/:id',function(req, res) { 

	var page_id = {_id: req.params.id};

	var updatePage = {$set: {
		title: req.body.title,
		text: req.body.text,
		excerpt: req.body.excerpt,
		imageUrl: req.body.imgUrl
		}};


	page.findOneAndUpdate(page_id, updatePage, function(err, page){
		if (err) return console.log(err);

		res.json({updated: true});
	});

});

module.exports = router;