const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    RDS_ENDPOINT: process.env.RDS_ENDPOINT,
    RDS_USERNAME: process.env.RDS_USERNAME,
    RDS_PASSWORD: process.env.RDS_PASSWORD,
    RDS_DATABASE: process.env.RDS_DATABASE,

    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
}