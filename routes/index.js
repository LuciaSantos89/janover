var express = require('express');
var router = express.Router();

var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
	var promotionsFile = './data/promotions.json';
	var promotions;
	var barsFile = './data/bars.json';
	var bars;

	//jsonfile.readFile(promotionsFile, function(err, obj) {
	//	promotions = obj;
		jsonfile.readFile(barsFile, function(err, obj) {
			bars = obj;
			res.render('index', {
				title: 'Janover',
				bars: bars,
				promotions: promotions
			});
		});

	//});

});

module.exports = router;