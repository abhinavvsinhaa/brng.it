import { axiosPrivate } from "../../api/axios";
import dateToStoreInDb from "../../util/dateToStoreInDb";
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
      storeDetails(this.pageId, res.data.id, "normal", dateToStoreInDb(null), "instagram", userId, caption, downloadableURLs, [], []);
      openNotificationWithIcon("Post shared")
    }

    else {
      openNotificationWithIcon("error", "Post could not be shared", "Please refresh the page and try again.")
    }
  }

  async schedule(caption, filesUploaded, downloadableURLs, userId, unixTimeStamp) {
    if (filesUploaded.length == 0) {
      openNotificationWithIcon("error", "Please upload at least one file.");
      return;
    }

    if (filesUploaded.length > 10) {
      openNotificationWithIcon("error", "Can't upload more than 10 files.");
      return;
    }

    console.log('calling this function')

    const res = await axiosPrivate.post('/schedule', {
      accessToken: this.userAccessToken,
      pageId: this.pageId,
      assetURL: downloadableURLs,
      userId,
      date: unixTimeStamp,
      caption,
      link: []
    })

    console.log(res.data)
  }
}

export default shareInstagram;
