import { axiosPrivate } from "../../api/axios";
import storeDetails from "./storeDetails";
import dateToStoreInDb from "../../util/dateToStoreInDb";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";

class shareLinkedIn {
    author;
    caption;
    access_token;
    file;

    constructor(author, caption, access_token, file) {
        this.author = author;
        this.caption = caption;
        this.access_token = access_token;
        this.file = file;

        console.log(file)
    }

    async shareNowLinkedIn(userId) {
        const { author, caption, access_token, file } = this
        const res = await axiosPrivate.post("/share/linkedin", {
            author,
            caption,
            access_token,
            file
        })

        console.log(res)

        // on successful post -> store details
        if (res.data.id) {
            const dt = dateToStoreInDb(null);
            storeDetails(author, res.data.id, "normal", dt, "linkedin", userId)
            openNotificationWithIcon("success", "Post shared")
        }
        else {
            openNotificationWithIcon("error", "Post could not be shared", "Please refresh the page and try again.")
        }
    }
}

export default shareLinkedIn;