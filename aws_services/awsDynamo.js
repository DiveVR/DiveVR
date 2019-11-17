var AWS = require('./awsSDK');

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
console.log(process.env.DYNAMO_TABLE_NAME)

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
    
    ddb.putItem(params, (err, data) => {
        if (err) {
            console.log("Error", err)
        } else {
            console.log("Success", data)
        }
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

    ddb.updateItem(params, (err, data) => {
        if (err) {
            console.log("Error", err)
        } else {
            console.log("Success", data)
        }
    })
}

module.exports = {createUserEntry, addVideo}
