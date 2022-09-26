import { axiosPrivate } from "../../api/axios";
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
    const res = await axiosPrivate.post(`/share/fb`, {
      pageId: this.pageId,
      pageAccessToken: this.pageAccessToken,
      userAccessToken: this.userAccessToken,
      caption,
      fileURL,
      link,
    });

    // once successfully posted, store it in DB
    console.log(res);

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
    storeDetails(this.pageId, res.data.id, "normal", dt, "facebook", userId);
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
    let dt = new Date(unixTimeStamp*1000)
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
    storeDetails(this.pageId, res.data.id, "normal", dt, "facebook", userId);
  }
}

export default shareFacebook;
