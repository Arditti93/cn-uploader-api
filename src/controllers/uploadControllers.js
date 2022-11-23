require("dotenv").config();
const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: process.env.SECRET_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

console.log(process.env.SECRET_ACCESS_KEY)

const S3_BUCKET = process.env.BUCKET;
const REGION = process.env.REGION;
const URL_EXPIRATION_TIME = 60; // in seconds

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
}) 

exports.generatePreSignedPutUrl = (req, res) => {
    try {
        console.log(req.body)
        myBucket.getSignedUrl('putObject', {
            Key: req.body.fileName,
            ContentType: req.body.fileType,
            Expires: URL_EXPIRATION_TIME
        } , (err , url) => {
            console.log(url)
            res.status(200).send({signedUrl: url})
        });
    } catch {
        console.log(erorr)
        res.status(500).send({error: error.message})
    }
}

