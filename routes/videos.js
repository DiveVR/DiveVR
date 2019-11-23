var express = require('express');
var router = express.Router();
var dynamo = require('../aws_services/awsDynamo');
const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  dynamo.getVideos(req.query.uid).then(data => {
    res.send(data)
  }).catch(err => {
      console.log(err)
  })
});

module.exports = router;
