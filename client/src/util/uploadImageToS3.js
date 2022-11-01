import axios, { axiosPrivate } from "../api/axios";

export default async function uploadImageToS3(file) {
    const getUploadUrl = await axiosPrivate.get('/uploadurl')

    // Upload image to pre-signed URL from S3 bucket
    await axios.put(getUploadUrl, file, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    const imageURL = getUploadUrl.split('?')[0]
    return imageURL;
}