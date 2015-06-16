var express = require('express');
var router = express.Router();

var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
	var promotionsFile = './data/promotions.json';
	var promotions;
	var barsFile = './data/bars.json';
	var bars;

	jsonfile.readFile(promotionsFile, function(err, obj1) {
		promotions = obj1;
		jsonfile.readFile(barsFile, function(err, obj2) {
			bars = obj2;
			for (var i in bars) {
				for (var j in promotions) {
					if (bars[i].id == promotions[j].id_bar) {
						promotions[j].bar_name = bars[i].name;
					}
				}
			}
			res.render('index', {
				title: 'Janover',
				bars: bars,
				promotions: promotions
			});
		});
	});

});

module.exports = router;