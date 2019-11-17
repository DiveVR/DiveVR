var AWS = require('./awsSDK');

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

function createUserEntry(uuid) {
    const params = {
        TableName: process.env.DYNAMO_TABLE_NAME,
        Item: {
            'user_id' : {S: uuid},
            'videos' : {
                L : []
            }
        }
    }

    return new Promise((resolve, reject) => {
        ddb.putItem(params, (err, data) => {
            if (err) {
                return reject(err)
            }
            return resolve(data)
        })
    })
}

function addVideo(uuid, url, videoTitle) {
    const params = {
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: {
            "user_id" : {
                S: uuid
            }
        },

        UpdateExpression : "SET #ri = list_append(#ri, :vals)",
        ExpressionAttributeNames: {
            "#ri": "videos"
        },
        ExpressionAttributeValues : {
            ':vals': {
                L: [{
                    M: {
                        'url': {S: url},
                        'video_title': {S: videoTitle}
                    }
                }]
            }
        }
    }

    return new Promise((resolve, reject) => {
        ddb.updateItem(params, (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        })
    })

    
}

module.exports = {createUserEntry, addVideo}