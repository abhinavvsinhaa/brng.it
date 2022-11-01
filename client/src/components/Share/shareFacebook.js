import { axiosPrivate } from "../../api/axios";
import dateToStoreInDb from "../../util/dateToStoreInDb";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";
import storeDetails from "./storeDetails";

class shareFacebook {
  pageId;
  userAccessToken;
  pageAccessToken;
  constructor(pageId, userAccessToken, pageAccessToken) {
    this.pageId = pageId;
    this.userAccessToken = userAccessToken;
    this.pageAccessToken = pageAccessToken;
  }

  async shareNow(caption, fileURL, link, userId) {
    console.log('downloadableURLs', fileURL);
    const res = await axiosPrivate.post(`/share/fb`, {
      pageId: this.pageId,
      pageAccessToken: this.pageAccessToken,
      userAccessToken: this.userAccessToken,
      caption,
      downloadableURLs: fileURL,
      link,
    });

    // once successfully posted, store it in DB
    console.log(res);

    if (res.data.id) {
      storeDetails(this.pageId, res.data.id, "normal", dateToStoreInDb(null), "facebook", userId);
      openNotificationWithIcon("Post shared")
    }

    else {
      openNotificationWithIcon("error", "Post could not be shared", "Please refresh the page and try again.")
    }
  }

  async scheduleForLater(caption, fileURL, link, unixTimeStamp, userId) {
    const res = await axiosPrivate.post(`/share/fb`, {
      pageId: this.pageId,
      pageAccessToken: this.pageAccessToken,
      userAccessToken: this.userAccessToken,
      caption,
      fileURL,
      link,
      unixTimeStamp,
    });

    console.log(res);
    if (res.data.id) {
      storeDetails(this.pageId, res.data.id, "schedule", dateToStoreInDb(unixTimeStamp), "facebook", userId);
    }
  }
}

export default shareFacebook;
