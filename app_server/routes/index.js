var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);

//var homepageController =
//	function(req, res) {
//	res.render('index', { title: 'Express' });
//	};
//router.get('/',  homepageController);

module.exports = router;
