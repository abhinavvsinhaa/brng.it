import { axiosPrivate } from "../../api/axios";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";

class shareInstagram {
  #pageId;
  #userAccessToken;
  constructor(igPageId, userAccessToken) {
    this.pageId = igPageId;
    this.userAccessToken = userAccessToken;
  }

  async shareNow(caption, filesUploaded, downloadableURLs) {
    if (filesUploaded.length == 0) {
      openNotificationWithIcon("error", "Please upload at least one file.");
      return;
    }

    if (filesUploaded.length > 10) {
      openNotificationWithIcon("error", "Can't upload more than 10 files.");
      return;
    }

    // await uploadFiles(filesUpload);
    const res = await axiosPrivate.post(`/share/ig`, {
      igPageId: this.pageId,
      userAccessToken: this.userAccessToken,
      caption,
      downloadableURLs,
    });

    console.log(res);
  }
}

export default shareInstagram;