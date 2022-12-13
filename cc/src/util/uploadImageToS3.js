import { axiosPrivate } from "../api/axios";

export default async function uploadImageToS3(file) {
  const getUploadUrl = await axiosPrivate.get("/uploadurl");
  console.log(getUploadUrl.data);

  // Upload image to pre-signed URL from S3 bucket
  await fetch(getUploadUrl.data, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: file,
  });

  const imageURL = getUploadUrl.data.split("?")[0];
  return imageURL;
}
