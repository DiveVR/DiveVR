var AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
AWS.config.update({region: process.env.AWS_REGION});

module.exports = AWS