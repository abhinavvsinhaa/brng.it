import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import Modal from "react-bootstrap/Modal";
import { LoadingOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import { Spin, Table } from "antd";
import "./Share.css";
import "antd/dist/antd.css";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Checkbox, notification } from "antd";

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
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
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
    file
  });
  console.log(res);
};

const Share = () => {
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [caption, setCaption] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [file, setFile] = useState('');

  // storing platforms details to perform actions
  const [linkedin, setLinkedin] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [selectedPlatformsToPostOn, setSelectedPlatformsToPostOn] =
    useState(null);

  const [checkboxOptions, setCheckboxOptions] = useState([]);

  const handleShareNowButton = () => {
    if (!selectedCustomer)
      return openNotificationWithIcon("error", "No account choosen");

    if (selectedPlatformsToPostOn === [])
      return openNotificationWithIcon(
        "error",
        "Please select platform to post on."
      );
      
    if (!caption && !file)
      return openNotificationWithIcon('error', 'No caption entered or file choosen');

    else if (!caption)
      openNotificationWithIcon("warning", "No caption entered");

    console.log(linkedin);
    // console.log(caption);

    selectedPlatformsToPostOn.map((platform) => {
      if (platform === "linkedin") {
        shareNowLinkedIn(linkedin.user.id, caption, linkedin.access_token, file);
      }
    });
  };

  const handleCloseSearchModal = () => setShowSearchModal(false);

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
    // if user account is selected, fetch their details
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
  };

  const rowSelectionShare = {
    onChange: async (selectedRowKeys, selectedRows) => {
      setSelectedCustomer(selectedRowKeys);
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
      const response = await axios.get(`/users/${auth.user.id}?customers=true`);
      const array = [];
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

  return (
    <>
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
              To share a post you see on your Feed, click or tap on Share button
              to share now or you can also schedule the post on a further time.
            </p>
            <div
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
            </div>
            <br />
            {selectedCustomer && (
              <p>
                <span style={{ fontWeight: 500 }}>
                  Selected account: &nbsp;
                </span>
                {selectedCustomer}
              </p>
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
                  <p
                    onClick={() => setShowPicker((val) => !val)}
                    style={{ cursor: "pointer" }}
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
                <button className="btn mx-2 btn-share-post">Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
