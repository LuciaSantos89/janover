var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
	var promotionsFile = './data/promotions.json';
	var promotions;
	var barsFile = './data/bars.json';
	var bars;
	jsonfile.readFile(promotionsFile, function(err, obj) {
		promotions = obj;
		res.render('news', { title: 'Noticias - Janover' });
	});
  
});

module.exports = router;
