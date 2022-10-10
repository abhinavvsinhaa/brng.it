import { axiosPrivate } from "../../api/axios";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";
import storeDetails from "./storeDetails";

class shareInstagram {
  pageId;
  userAccessToken;
  constructor(igPageId, userAccessToken) {
    this.pageId = igPageId;
    this.userAccessToken = userAccessToken;
  }

  async shareNow(caption, filesUploaded, downloadableURLs, userId) {
    if (filesUploaded.length == 0) {
      openNotificationWithIcon("error", "Please upload at least one file.");
      return;
    }

    if (filesUploaded.length > 10) {
      openNotificationWithIcon("error", "Can't upload more than 10 files.");
      return;
    }

    console.log(downloadableURLs);

    // await uploadFiles(filesUpload);
    const res = await axiosPrivate.post(`/share/ig`, {
      igPageId: this.pageId,
      userAccessToken: this.userAccessToken,
      caption,
      downloadableURLs,
    });

    console.log(res);
    // successfuly posted
    if (res.data.id) {
      let dt = new Date();
      dt =
        dt.getDate() +
        "/" +
        (dt.getMonth() + 1) +
        "/" +
        dt.getFullYear() +
        " @ " +
        dt.getHours() +
        ":" +
        dt.getMinutes();
      storeDetails(this.pageId, res.data.id, "normal", dt, "instagram", userId);
    }
  }
}

export default shareInstagram;
