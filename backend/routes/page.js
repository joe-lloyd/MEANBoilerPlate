var express = require('express');
var page = require('../models/page');
var router = express.Router();

router.route('/page')

	.post( function(req, res) { 
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
	})


	.get( function(req, res) {

		page.find({}, function(err, page){
			res.json(page);
		});

	});

router.route('/page/:id')

	.delete( function(req, res) { 

		var page_id = {_id: req.params.id};

		page.findOneAndRemove(page_id, function(err, page){
			if (err) return console.log(err);

			res.json({deleted: true});
		});

	})


	.put( function(req, res) { 

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

	})

	.get( function(req, res) {

		var page_id = {_id: req.params.id};

		page.findOne({_id: page_id}, function(err, page){
			res.json(page);
		});

	});

module.exports = router;