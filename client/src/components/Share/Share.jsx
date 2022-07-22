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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

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
  }
];

const options = [
  { label: 'facebook', value: <FacebookIcon/> },
  { label: 'instagram', value: <InstagramIcon/> },
  { label: 'linkedin', value: <LinkedInIcon/> },
];

const Share = () => {
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const handleCloseSearchModal = () => setShowSearchModal(false);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({})
  const [caption, setCaption] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [file, setFile] = useState(null);

  const [checkboxOptions, setCheckboxOptions] = useState([]);

  const onEmojiClick = (event, emojiObject) => {
    setCaption((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const rowSelectionShare = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedCustomer(selectedRowKeys)
      console.log(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  // todo: make share now working
  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`/users/${auth.user.id}?customers=true`)
      const array = []
      // const checkbox = [];
      response.data.customers.map((customer) => {
        let details = {
          key: customer.email,
          name: customer.name,
          email: customer.email,
        };

        if (customer.linkedin)
          details.linkedin = customer.linkedin
        if (customer.instagram)
          details.instagram = customer.instagram
        if (customer.facebook)
          details.facebook = customer.facebook

        array.push(details);
      });
      setLoading(false);
      setCustomers(array);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChooseAccountButton = () => {
    setShowSearchModal(true)
    fetchCustomers();
  }

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
            <div>
              <button className="btn btn-share-post" onClick={handleChooseAccountButton}>Choose Account</button>
              <div>

              </div>
            </div>
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
                      value={file}
                      onChange={(e) => console.log(e.target.files[0])}
                      className="custom-file-input"
                    />
                  </div>
                </div>
              </form>
              <br />
              <div className="flex">
                <button className="btn btn-share-post">Share Now</button>
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
