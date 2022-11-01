const aws = require("aws-sdk")
const crypto = require("crypto")
const { promisify } = require("util")

require("dotenv").config()

const randomBytes = promisify(crypto.randomBytes)

const region = "ap-south-1"
const bucket = "brngit-upload-images"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_ACCESS_KEY_SECRET

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

async function generateUploadURL() {
    // generate random name for image
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: bucket,
        Key: imageName,
        Expires: 120
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL;
}

module.exports = generateUploadURL