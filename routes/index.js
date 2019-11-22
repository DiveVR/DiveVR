var express = require('express');
var router = express.Router();
var dynamo = require('../aws_services/awsDynamo');
const uuidv4 = require('uuid/v4');
const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  dynamo.getVideos('4STmPwrY4zUX3lg7iwmHvmZsO2F2').then(data => {
    console.log(data)
    res.sendStatus(200)
  })
});

module.exports = router;
