
const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: 'AKIAT6NJKH25AYOTNCP4',
    secretAccessKey: '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'
})

const S3_BUCKET ='cn-uploader';
const REGION ='eu-west-2';
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

