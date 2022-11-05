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
import { notification, TimePicker, Modal as ModalAntD, DatePicker } from "antd";
import moment from "moment";
import { v4 } from "uuid";
import { storage } from "../../util/Firebase";
import { ref, getDownloadURL, uploadBytes, getStorage, uploadBytesResumable } from "firebase/storage";
import shareFacebook from "./shareFacebook"
import shareInstagram from "./shareInstagram";
import shareLinkedIn from "./shareLinkedin";

import fb1 from "../../assets/images/fb1.png";
import fb2 from "../../assets/images/fb2.png";
import Facebook from "@mui/icons-material/Facebook";
import CircularProgress from '@mui/material/CircularProgress';
import uploadImageToS3 from "../../util/uploadImageToS3"

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

// notification
const openNotificationWithIcon = (type, title, content) => {
  notification[type]({
    message: title,
    description: content,
  });
};

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
  const [filesPreview, setFilesPreview] = useState([]);
  const [filesUpload, setFilesUpload] = useState([]);

  // store links of file after uploading
  const [downloadableURLs, setDownloadableURLs] = useState([]);

  // storing platforms details to perform actions
  const [linkedin, setLinkedin] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [selectedPlatformsToPostOn, setSelectedPlatformsToPostOn] =
    useState(null);

  const [checkboxOptions, setCheckboxOptions] = useState([]);

  const uploadFiles = async (f) => {
    // if (filesUpload == []) return null;

    // .map(async (file) => {
    // let uid = v4();

    // const metadata = {
    //   contentType: "image/*",
    // };
    // const storage = getStorage();
    // const storageRef = ref(storage, `/image/${uid}-${f.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // // Listen for state changes, errors, and completion of the upload.
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log("Upload is " + progress + "% done");
    //     switch (snapshot.state) {
    //       case "paused":
    //         console.log("Upload is paused");
    //         break;
    //       case "running":
    //         console.log("Upload is running");
    //         break;
    //     }
    //   },
    //   (error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case "storage/unauthorized":
    //         // User doesn't have permission to access the object
    //         break;
    //       case "storage/canceled":
    //         // User canceled the upload
    //         break;

    //       // ...

    //       case "storage/unknown":
    //         // Unknown error occurred, inspect error.serverResponse
    //         break;
    //     }
    //   },
    //   () => {
    //     // Upload completed successfully, now we can get the download URL
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log("File available at", downloadURL);
    //       setDownloadableURLs([...downloadableURLs, downloadURL]);
    //     });
    //   }
    // );

    // // uploading file
    // const snapshot = await uploadBytes(storageRef, file);
    // console.log("Uploaded a blob or file!", snapshot.ref.toString());
    // const url = await getDownloadURL(
    //   ref(storage, `image/${uid}-${f.name}`)
    // );
    // console.log(url);
    // setDownloadableURLs([...downloadableURLs, url]);
    // });

    // var formdata = new FormData();
    // formdata.append("image", f, "file");

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("https://api.imgbb.com/1/upload?expiration=600&key=43a9a1e2f210ad2d192a2249474a92cf", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result)
    //     setDownloadableURLs([...downloadableURLs, result.data.url])
    //   })
    //   .catch(error => console.log('error', error));

    const url = await uploadImageToS3(f);
    setDownloadableURLs([...downloadableURLs, url]);
  };

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

    // * check which platform to post on or schedule posts
    if (facebook != null) {
      // find details about the selected subscription
      const res = await axios.get(`/users/${auth.user.id}`);
      const searchTarget = res.data.facebookSub;
      searchTarget.map((found) => {
        if (found.id == selectedCustomerDetails.key) {
          const fb = new shareFacebook(selectedCustomerDetails.key, res.data.facebook, found.access_token);
          // let fileURL;
          let link;
          fb.shareNow(caption, downloadableURLs, link, auth.user.id)
        }
      });
    } else if (instagram != null) {
      // find details about the selected subscription
      const res = await axios.get(`/users/${auth.user.id}`);
      const searchTarget = res.data.facebookSub;
      searchTarget.map((found) => {
        if (found.instagram.id == selectedCustomerDetails.key) {
          const ig = new shareInstagram(selectedCustomerDetails.key, res.data.facebook)
          ig.shareNow(caption, filesUpload, downloadableURLs, auth.user.id);
        }
      });
    } else if (linkedin != null) {

      const res = await axiosPrivate.get(`/users/${auth.user.id}`)
      const searchTarget = res.data.linkedinSub

      searchTarget.map(async found => {
        if (found.id == selectedCustomerDetails.key) {
          const promises = filesUpload.map(async f => {
            const binaries = new Promise((resolve, reject) => {
              let reader = new FileReader();

              reader.onload = function (e) {
                resolve(e.target.result);
              }

              reader.onerror = function (e) {
                console.log('error in reading file: ', e.type);
              }

              reader.readAsBinaryString(f);
            })

            return binaries;
          })

          const binaryFiles = await Promise.all(promises);

          const linkedin = new shareLinkedIn(selectedCustomerDetails.key, caption, found.access_token, binaryFiles);

          linkedin.shareNowLinkedIn(auth.user.id);
        }
      })
    }
  };

  const handleCloseSearchModal = () => setShowSearchModal(false);
  const handleCloseScheduleModal = () => setScheduleModal(false);

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
    else if (selectedCustomerDetails.platform == "LinkedIn")
      setLinkedin(selectedCustomerDetails);
  };

  const rowSelectionShare = {
    onChange: async (selectedRowKeys, selectedRows) => {
      // console.log("selected row keys", selectedRowKeys)
      console.log("selected rows", selectedRows[0]);
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

        if (sub.instagram) {
          array.push({
            key: sub.instagram.id,
            name: sub.name,
            platform: "Instagram",
          });
        }
      });

      response.data.linkedinSub.map(async (sub) => {
        let details = {
          key: sub.id,
          name: sub.localizedFirstName + " " + sub.localizedLastName,
          platform: "LinkedIn"
        }

        array.push(details)
      })

      setLoading(false);
      setCustomers(array);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseScheduleModalOKClick = async () => {
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
    const unixTimeStamp = Math.floor(date.getTime() / 1000);
    // console.log(unixTimeStamp);

    if (facebook != null) {
      // find details about the selected subscription
      const res = await axios.get(`/users/${auth.user.id}`);
      const searchTarget = res.data.facebookSub;
      searchTarget.map((found) => {
        if (found.id == selectedCustomerDetails.key) {
          const fb = new shareFacebook(selectedCustomerDetails.key, res.data.facebook, found.access_token);
          let fileURL;
          let link;
          fb.scheduleForLater(caption, fileURL, link, unixTimeStamp, auth.user.id)
        }
      });
    }

    else if (instagram != null) {
      // find details about the selected subscription
      const res = await axios.get(`/users/${auth.user.id}`);
      const searchTarget = res.data.facebookSub;
      searchTarget.map((found) => {
        if (found.instagram.id == selectedCustomerDetails.key) {
          const ig = new shareInstagram(selectedCustomerDetails.key, res.data.facebook)

          ig.schedule(caption, filesUpload, downloadableURLs, auth.user.id, unixTimeStamp);
        }
      });
    }
  };

  const onSearchSub = () => { };

  useEffect(() => {
    fetchCustomers();
    console.log(auth)
    setScheduledDate(moment().format("MM/DD/YYYY"));
  }, []);

  return (
    <Tabs defaultActiveKey="1" centered>
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
                    <div className="flex align-items-center justify-content-between">
                      <div className="flex align-items-center">
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginRight: "10px",
                            cursor: "pointer",
                            marginBottom: 0,
                          }}
                        >
                          🔗
                        </p>
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            marginRight: "10px",
                            cursor: "pointer",
                            marginBottom: 0,
                          }}
                          onClick={() => {
                            setCaption((prev) => prev + "%23");
                          }}
                        >
                          #
                        </p>
                        <p
                          onClick={() => setShowPicker((val) => !val)}
                          style={{
                            cursor: "pointer",
                            fontSize: "18px",
                            fontWeight: 600,
                            marginRight: "10px",
                            marginBottom: 0,
                          }}
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
                      </div>
                      <div>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          onChange={async (e) => {
                            e.preventDefault();
                            setFilesUpload([...filesUpload, e.target.files[0]]);
                            var reader = new FileReader();

                            reader.onload = function (e) {
                              // binary data
                              // setFile(e.target.result);
                              setFilesPreview([
                                ...filesPreview,
                                e.target.result,
                              ]);
                            };
                            reader.onerror = function (e) {
                              // error occurred
                              console.log("Error : " + e.type);
                            };

                            reader.readAsDataURL(e.target.files[0]);
                            uploadFiles(e.target.files[0])
                          }}
                          className="custom-file-input"
                          style={{ display: "none" }}
                        />
                        {
                          selectedCustomerDetails &&
                          <label htmlFor="image" className="url-submit-btn">
                            Upload
                          </label>
                        }
                      </div>
                      {/* <div> */}
                      {/* </div> */}
                    </div>
                  </form>
                  <br />
                  <div className="flex">
                    {filesPreview.map((preview, i) => {
                      return (
                        <div className="flex justify-content-flex-start">
                          <img
                            src={preview}
                            alt=""
                            key={i}
                            width="200px"
                            height="200px"
                          />
                        </div>
                      );
                    })}
                  </div>
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
                  <div className="preview">
                    {facebook && (
                      <>
                        <span>
                          <Facebook />
                          &nbsp; Facebook
                        </span>
                        <br />
                        <div className="facebookPreview">
                          <img src={fb1} alt="" className="fb1" />
                          <p style={{ margin: "10px 0" }}>{caption}</p>
                          <img src={fb2} alt="" className="fb2" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shadow-sm"
              style={{
                height: "100vh",
                backgroundColor: "white",
                float: "right",
                width: "350px",
                position: "fixed",
                padding: "20px",
                top: 64,
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
              <Search
                placeholder="Search for social accounts"
                onSearch={onSearchSub}
                enterButton
              />
              <br />
              <br />
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
      <TabPane tab="Settings" key="3">
        Settings
      </TabPane>
    </Tabs>
  );
};

export default Share;
