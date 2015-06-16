var express = require('express');
var router = express.Router();

var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('bars', {
		title: 'Bar - Janover'
	});
});

router.get('/:bar_id', function(req, res, next) {
	var bar_id = req.params.bar_id;
	var promotionsFile = './data/promotions.json';
	var promotions;
	var barsFile = './data/bars.json';
	var bars;
	var bar;
	var bar_promotions = [];

	jsonfile.readFile(promotionsFile, function(err, obj1) {
		promotions = obj1;
		jsonfile.readFile(barsFile, function(err, obj2) {
			bars = obj2;
			for (var i in bars) {
				if (bar_id == bars[i].id) {
					bar = bars[i];
					break;
				}
			}
			for (var j in promotions){
				if(bar.id == promotions[j].id_bar){
					bar_promotions.push(promotions[j]);
				}
			}
			console.log();
			res.render('bars', {
				title: 'Bar - Janover',
				bar:bar,
				promotions:bar_promotions
			});
		});

	});



});

module.exports = router;