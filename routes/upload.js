const express = require('express');
const router = express.Router();
var path = require('path');
var awsS3 = require('../aws_services/awsS3.js');
const ddb = require('../aws_services/awsDynamo.js')
const util = require('util');

router.get('/', function(req, res, next) {
  res.send('<p>Upload /GET function working</p>')
})

// The parameter 'file' is the name of the attribute in the html page
router.post('/', awsS3.upload.array('file', 1), function(req, res, next) {
  ddb.addVideo(req.query.uid, util.format('%s/%s', process.env.CLOUDFRONT_PREFIX_URL, req.files[0].key), req.files[0].key)
  res.sendStatus(200)
})

router.use(function (err, req, res, next) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('404')
    }
  });

module.exports = router