var express = require('express');
const router = express.Router();
const ddb = require('../aws_services/awsDynamo.js')

router.get('/', function(req, res, next) {
  res.send('<p>Signup /GET function working</p>')
})

router.post('/', function(req, res, next) {
  // The front end makes a POST request and stores the Firebase UID in the body
  ddb.createUserEntry(req.body.uid, req.body.firstName, req.body.lastName)
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