var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<p>Upload /GET function working</p>')
});

module.exports = router;
