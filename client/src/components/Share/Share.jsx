import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import Modal from "react-bootstrap/Modal";
import { LoadingOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import { Spin, Table, Tabs, Input } from "antd";
import "./Share.css";
import "antd/dist/antd.css";
import axios, { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Checkbox,
  notification,
  TimePicker,
  Modal as ModalAntD,
  DatePicker,
} from "antd";
import moment from "moment";

const { TabPane } = Tabs; 
const { Search } = Input;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
      color: "var(--index)",
    }}
    spin
  />
);

// table
const columnsShare = [
  {
    title: "Account",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Platform",
    dataIndex: "platform",
  },
];

const shareNowLinkedIn = async (author, caption, access_token, file) => {
  // console.log('access_token', access_token);
  // console.log('author', author);
  // console.log('caption', caption);

  // if (file) {
  //   const reader = new FileReader();
  //   const binaryImage = reader.readAsBinaryString(file);
  //   console.log("binary", binaryImage);
  // }

  const res = await axios.post("/share?linkedin=true", {
    access_token,
    caption,
    author,
    file,
  });
  console.log(res);
};

const shareNowFacebook = async (
  pageId,
  pageAccessToken,
  userAccessToken,
  caption,
  file,
  link
) => {
  const res = await axiosPrivate.post(`/share/fb`, {
    pageId,
    pageAccessToken,
    userAccessToken,
    caption,
    fileURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    link: "https://facebook.com",
  });

  console.log(res);
};

const Share = () => {
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [scheduledDate, setScheduledDate] = useState(moment(new Date()));
  const [scheduledTime, setScheduledTime] = useState("");

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
  const [caption, setCaption] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [file, setFile] = useState("");

  // storing platforms details to perform actions
  const [linkedin, setLinkedin] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [selectedPlatformsToPostOn, setSelectedPlatformsToPostOn] =
    useState(null);

  const [checkboxOptions, setCheckboxOptions] = useState([]);

  const handleShareNowButton = async () => {
    if (!selectedCustomer)
      return openNotificationWithIcon("error", "No account choosen");

    if (selectedPlatformsToPostOn === [])
      return openNotificationWithIcon(
        "error",
        "Please select platform to post on."
      );

    if (!caption && !file)
      return openNotificationWithIcon(
        "error",
        "No caption entered or file choosen"
      );
    else if (!caption)
      openNotificationWithIcon("warning", "No caption entered");

    // console.log(linkedin);
    // console.log(caption);

    // * check which platform to post on or schedule posts
    if (facebook != null) {
      // find details about the selected subscription
      const res = await axios.get(`/users/${auth.user.id}`);
      const searchTarget = res.data.facebookSub;
      searchTarget.map((found) => {
        if (found.id == selectedCustomerDetails.key) {
          shareNowFacebook(
            selectedCustomerDetails.key,
            found.access_token,
            res.data.facebook,
            caption,
            file
          );
        }
      });
    } else if (instagram != null) {
    } else if (linkedin != null) {
    }

    // * multiple platform posts on single click
    /*
    selectedPlatformsToPostOn.map((platform) => {
      if (platform === "linkedin") {
        shareNowLinkedIn(linkedin.user.id, caption, linkedin.access_token, file);
      }
    });
    */
  };

  const handleCloseSearchModal = () => setShowSearchModal(false);
  const handleCloseScheduleModal = () => setScheduleModal(false);

  // notification
  const openNotificationWithIcon = (type, title, content) => {
    notification[type]({
      message: title,
      description: content,
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setCaption((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const confirmSelectedUser = async () => {
    handleCloseSearchModal();
    if (selectedCustomer == null) {
      return openNotificationWithIcon(
        "error",
        "No account selected",
        "Please select any one account, then click on confirm button."
      );
    }

    openNotificationWithIcon(
      "success",
      "User account selected",
      "Now choose from available social media platforms, on which you want to post or schedule."
    );

    if (selectedCustomerDetails.platform == "Facebook")
      setFacebook(selectedCustomerDetails);
    else if (selectedCustomerDetails.platform == "Instagram")
      setInstagram(selectedCustomerDetails);
    else if (selectedCustomerDetails.platform == "Linkedin")
      setLinkedin(selectedCustomerDetails);

    // !deprecated
    // if user account is selected, fetch their details
    /*
    let array = [];
    const res = await axios.get(`/client/find?email=${selectedCustomer}`);
    console.log(res);
    if (res.data.linkedin) {
      array.push({
        label: <LinkedInIcon />,
        value: "linkedin",
      });
      setLinkedin(res.data.linkedin);
    }
    if (res.data.facebook) {
      array.push({
        label: <FacebookIcon />,
        value: "facebook",
      });
      setFacebook(res.data.facebook);
    }
    if (res.data.instagram) {
      array.push({
        label: <InstagramIcon />,
        value: "instagram",
      });
      setInstagram(res.data.instagram);
    }

    setCheckboxOptions(array);
    */
  };

  const rowSelectionShare = {
    onChange: async (selectedRowKeys, selectedRows) => {
      // console.log("selected row keys", selectedRowKeys)
      // console.log("selected rows", selectedRows)
      setSelectedCustomer(selectedRowKeys);
      setSelectedCustomerDetails(selectedRows[0]);
      setLinkedin(null);
      setInstagram(null);
      setFacebook(null);
      setCheckboxOptions([]);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  const checkboxMarked = (e) => {
    // e -> will return an array of checked lists in sorted manner
    console.log(e);
    setSelectedPlatformsToPostOn(e);
  };

  // todo: make share now working
  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`/users/${auth.user.id}`);
      const array = [];
      response.data.facebookSub.map(async (sub) => {
        let details = {
          key: sub.id,
          name: sub.name,
          platform: "Facebook",
        };
        array.push(details);
      });

      array.map(async item => {
        const resFacebook = await axios.get(`https://graph.facebook.com/v14.0/${item.key}/picture`);
        console.log(resFacebook.request.responseURL);
        return item.name = `<img src={'${resFacebook.request.responseURL}'}/> ${item.name}`;
      })

      // todo: map for linkeding and instagram and push it to arrays
      // ----------------------------------------------------------

      // !deprecated since last requirements
      /*
      response.data.customers.map((customer) => {
        let details = {
          key: customer.email,
          name: customer.name,
          email: customer.email,
        };

        if (customer.linkedin) details.linkedin = customer.linkedin;
        if (customer.instagram) details.instagram = customer.instagram;
        if (customer.facebook) details.facebook = customer.facebook;

        array.push(details);
      });
      */
      setLoading(false);
      setCustomers(array);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChooseAccountButton = () => {
    setShowSearchModal(true);
    fetchCustomers();
  };

  const handleCloseScheduleModalOKClick = () => {
    if (scheduledTime == "" || scheduledDate == "")
      return openNotificationWithIcon("error", "Please select time and date");

    setScheduleModal(false);
    let dateStr = `${scheduledDate} ${scheduledTime}:00`;
    console.log(dateStr);
    const [dateComponents, timeComponents] = dateStr.split(" ");
    console.log(dateComponents); // 👉️ "09/24/2022"
    console.log(timeComponents); // 👉️ "09:25:32"

    const [month, day, year] = dateComponents.split("/");
    const [hours, minutes, seconds] = timeComponents.split(":");

    const date = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    console.log(date); // 👉️ Sat Sep 24 2022 09:25:32

    // ✅ Get Unix timestamp
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    console.log(unixTimestamp);
  };

  const onSearchSub = () => {

  }

  useEffect(() => {
    fetchCustomers();
    setScheduledDate(moment().format("MM/DD/YYYY"));
  }, []);

  return (
    <Tabs defaultActiveKey="1" centered style={{ height: 'calc(100vh - 64px)', overflowY: 'hidden' }}>
      <TabPane tab="Publish" key="1">
        <div>
          <Modal show={showSearchModal} onHide={handleCloseSearchModal}>
            <Modal.Header
              style={{
                padding: 0,
              }}
            >
              <div class="form-title">Accounts</div>
            </Modal.Header>
            <Modal.Body>
              {loading ? (
                <>
                  <Spin indicator={antIcon} />
                </>
              ) : (
                <>
                  <Table
                    rowSelection={{
                      type: "radio",
                      ...rowSelectionShare,
                    }}
                    columns={columnsShare}
                    dataSource={customers}
                  />
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleCloseSearchModal}
                className="url-submit-btn"
              >
                Close
              </Button>
              <Button
                variant="secondary"
                onClick={confirmSelectedUser}
                className="url-success-btn"
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          <ModalAntD
            title="Schedule Post "
            visible={scheduleModal}
            onCancel={handleCloseScheduleModal}
            onOk={handleCloseScheduleModalOKClick}
          >
            <p>
              Select a date and time for your post. It will be posted according
              to the Indian Standard Timezone (IST).
            </p>
            <DatePicker
              defaultValue={moment(scheduledDate, "MM/DD/YYYY")}
              format={"MM/DD/YYYY"}
              onChange={(date, dateString) => setScheduledDate(dateString)}
            />
            &nbsp;
            <TimePicker
              minuteStep={30}
              format={`HH:mm`}
              onChange={(time, timeString) => setScheduledTime(timeString)}
            />
            <p
              style={{
                fontSize: "12px",
                color: "gray",
              }}
            >
              <br />
              Note: The published date must be between 10 minutes and 75 days
              from the time of the API request.
            </p>
          </ModalAntD>
          <div className="container share-container">
            <br />
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 col">
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Share Post
                </p>
                <p style={{ fontSize: "14px", opacity: 0.8 }}>
                  To share a post you see on your Feed, click or tap on Share
                  button to share now or you can also schedule the post on a
                  further time.
                </p>
                {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-share-post"
                onClick={handleChooseAccountButton}
              >
                Choose Account
              </button>
              <div>
                <Checkbox.Group
                  options={checkboxOptions}
                  onChange={(e) => checkboxMarked(e)}
                />
              </div>
            </div> */}
                <br />
                {selectedCustomer && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      <span style={{ fontWeight: 500 }}>
                        Selected account: &nbsp;
                      </span>
                      {selectedCustomerDetails.name}
                      &nbsp;
                      {selectedCustomerDetails.platform == "Facebook" ? (
                        <FacebookIcon />
                      ) : (
                        <></>
                      )}
                      {selectedCustomerDetails.platform == "Instagram" ? (
                        <InstagramIcon />
                      ) : (
                        <></>
                      )}
                      {selectedCustomerDetails.platform == "Linkedin" ? (
                        <LinkedInIcon />
                      ) : (
                        <></>
                      )}
                    </p>
                    <Button
                      variant="secondary"
                      onClick={confirmSelectedUser}
                      className="url-success-btn"
                    >
                      Confirm
                    </Button>
                  </div>
                )}
                <br />
                <div className="share-post-inner-div ">
                  <form action="" className="shadow-sm py-2 px-2 rounded">
                    <textarea
                      name=""
                      id=""
                      rows="8"
                      className="caption-input text-14px"
                      placeholder="Write a caption..."
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                    <div className="flex align-items-center">
                      <p style={{ fontSize: '18px', fontWeight: 600, marginRight: '10px', cursor: 'pointer', marginBottom: 0 }} onClick={() => {
                        setCaption(prev => prev + '%23')
                      }}>
                        #
                      </p>
                      <p
                        onClick={() => setShowPicker((val) => !val)}
                        style={{ cursor: "pointer", fontSize: '18px', fontWeight: 600, marginRight: '10px', marginBottom: 0 }}

                      >
                        😃
                      </p>

                      {showPicker && (
                        <Picker
                          pickerStyle={{ width: "100%", marginTop: "10px" }}
                          onEmojiClick={onEmojiClick}
                        />
                      )}
                      &nbsp;&nbsp;
                      <div>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          onChange={async (e) => {
                            var reader = new FileReader();

                            reader.onload = function (e) {
                              // binary data
                              setFile(e.target.result);
                            };
                            reader.onerror = function (e) {
                              // error occurred
                              console.log("Error : " + e.type);
                            };

                            reader.readAsBinaryString(e.target.files[0]);
                          }}
                          className="custom-file-input"
                        />
                      </div>
                    </div>
                  </form>
                  <br />
                  <div className="flex">
                    <button
                      className="btn btn-share-post"
                      onClick={handleShareNowButton}
                    >
                      Share Now
                    </button>
                    <button
                      className="btn mx-2 btn-share-post"
                      onClick={() => setScheduleModal(true)}
                    >
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "100vh",
                backgroundColor: "white",
                float: "right",
                width: "350px",
                position: "absolute",
                padding: "100px 20px",
                top: 0,
                right: 0,
              }}
            >
              <p style={{ fontSize: "14px" }}>
                Please choose any one account from the accounts shown below.
                <br />
                <br />
                <span
                  style={{
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  Note: Multiple accounts selection not allowed.
                </span>
                <br />
              </p>
              <Search placeholder="Search for social accounts" onSearch={onSearchSub} enterButton />
              <br /><br />
              {loading ? (
                <>
                  <Spin indicator={antIcon} />
                </>
              ) : (
                <>
                  <Table
                    rowSelection={{
                      type: "radio",
                      ...rowSelectionShare,
                    }}
                    columns={columnsShare}
                    dataSource={customers}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab="History" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Analytics" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Share;
