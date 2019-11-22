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

function getVideos(uid) {
    const params = {
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: {
            "user_id" : {
                S: uid
            }
        },
        ProjectionExpression: 'videos'
    }

    return new Promise((resolve, reject) => {
        ddb.getItem(params, (err, data) => {
            if (err) {
                return reject(err)
            }
            var vids =[]
            var vid = {
                url: "",
                videoTitle: ""
            }

            for (let video of data.Item.videos.L) {
                vid.url = video.M.url.S
                vid.videoTitle = video.M.video_title.S
                vids.push(vid)
            }
            resolve(vids)
        })
    })
}

module.exports = {createUserEntry, addVideo, getVideos}
