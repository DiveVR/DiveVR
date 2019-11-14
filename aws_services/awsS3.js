var AWS = require('./awsSDK');
var multer = require('multer');
var multerS3 = require('multer-s3');

const config = require('../config/config.js')

s3 = new AWS.S3({apiVersion: '2006-03-01'})

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        },
    })
});

module.exports = {upload}