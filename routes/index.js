var express = require('express');
var router = express.Router();
var dynamo = require('../aws_services/awsDynamo');
const uuidv4 = require('uuid/v4');
const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  const randomUUID = uuidv4()
  
  const vidURL1 = util.format('test_url_1/%s', randomUUID)
  const vidURL2 = util.format('test_url_2/%s', randomUUID)

  const vidTitle1 = util.format('test_title_1/%s', randomUUID)
  const vidTitle2 = util.format('test_title_2/%s', randomUUID)

  const response = {
    "user_uuid": randomUUID,
    "videos": [
      {
        "url": vidURL1,
        "video_title": vidTitle1
      },
      {
        "url": vidURL2,
        "video_title": vidTitle2
      }
    ]
  }

  dynamo.createUserEntry(randomUUID).then(() => {
    dynamo.addVideo(randomUUID, vidURL1, vidTitle1)
    dynamo.addVideo(randomUUID, vidURL2, vidTitle2)
  })
  
  res.json(response)
});

module.exports = router;
