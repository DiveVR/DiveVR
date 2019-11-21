var AWS = require('./awsSDK');
var multer = require('multer');
var multerS3 = require('multer-s3');
const uuidv4 = require('uuid/v4');

const config = require('../config/config.js')

s3 = new AWS.S3({apiVersion: '2006-03-01'})

function showfileUUID(uuid) {
    console.log(uuid)
}

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            const fileUUID = uuidv4()
            cb(null, fileUUID)
            showfileUUID(fileUUID)
        },
    })
});

module.exports = {upload}