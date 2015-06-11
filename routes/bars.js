var express = require('express');
var router = express.Router();

var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('bars', {
		title: 'Bar - Janover'
	});
});

router.get('/bar/:bar_id', function(req, res, next) {
	var bar_id = req.params.bar_id;
	var promotionsFile = './data/promotions.json';
	var promotions;
	var barsFile = './data/bars.json';
	var bars;
	var bar;

	jsonfile.readFile(promotionsFile, function(err, obj) {
		promotions = obj;
		jsonfile.readFile(barsFile, function(err, obj) {
			bars = obj;
			for (var i in bars) {
				if (bar_id = bars[i].id) {
					bar = bars[i];
				}
			}
			res.render('bars', {
				title: 'Bar - Janover',
				bar:bar
			});
		});

	});



});

module.exports = router;