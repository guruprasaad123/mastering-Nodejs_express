var express = require('express');
var router = express.Router();

console.log('The dir : '+__dirname);
console.log('The filename : '+__filename);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
