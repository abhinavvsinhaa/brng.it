import React, { useState } from "react";
import createIcon from "../../assets/images/add-white.png";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Divider, Radio, Table } from "antd";
import axios from "../../api/axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../hooks/useAuth";
import 'antd/dist/antd.css';

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
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

export default function useSearchCustomers() {
  const { auth, setAuth } = useAuth();

  const [customerName, setCustomerName] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProfile, setSelectedProfile] = useState('');

  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleCloseSearchModal = () => setShowSearchModal(false);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {      
      // set selected profile
      setSelectedProfile(String(selectedRowKeys));
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  // signup new customer profile state
  const [newProfileFirstName, setNewProfileFirstName] = useState("");
  const [newProfileLastName, setNewProfileLastName] = useState("");
  const [newProfileEmail, setNewProfileEmail] = useState("");

  // register profile
  const registerProfile = async () => {
    try {
      const response = await axios.post("/client", {
        name: `${newProfileFirstName} ${newProfileLastName}`,
        email: String(newProfileEmail),
        user: auth.user.id,
      });

      console.log(response);
      setShowCreateModal(false);
    } catch (error) {
      // CONFLICT -> profile already exists
      if (error.response.status === 409)
        return alert("Profile already exists with entered email.");

      return console.log(error);
    }
  };

  // search profiles using name
  const findCustomersOnSearch = async () => {
    if (customerName === "") {
      alert("Please enter user name!");
      return;
    }

    setShowSearchModal(true);
    const response = await axios(`/client/find?name=${customerName}`);
    setCustomers([]);
    console.log(response);
    const data = []
    response.data.map((profile) => {
      data.push({
        key: profile.email,
        name: profile.name,
        email: profile.email,
      });
    });
    setCustomers(data);
    setLoading(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return {
    selectedProfile,
    render: (
      <>
        {/* Search customer profiles modal */}
        <Modal show={showSearchModal} onHide={handleCloseSearchModal}>
          <Modal.Header style={{
            padding: 0
          }}>
            <div class="form-title">Profiles</div>
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
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                  columns={columns}
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
  
        {/* Create new customer profile */}
        <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
          <Modal.Header
            style={{
              padding: 0,
            }}
          >
            <div class="form-title">Create Profile</div>
          </Modal.Header>
          <Modal.Body
            style={{
              padding: 0,
            }}
          >
            <div class="card-form">
              <form class="signup">
                <div class="form-body">
                  <div class="form-row">
                    <input
                      type="text"
                      placeholder="First Name*"
                      value={newProfileFirstName}
                      onChange={(e) => setNewProfileFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      value={newProfileLastName}
                      onChange={(e) => setNewProfileLastName(e.target.value)}
                    />
                  </div>
                  <div class="form-row">
                    <input
                      type="text"
                      placeholder="Email Address*"
                      value={newProfileEmail}
                      onChange={(e) => setNewProfileEmail(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleCloseCreateModal}
              className="url-submit-btn border-0"
            >
              Close
            </Button>
            <Button
              onClick={registerProfile}
              className="url-success-btn border-0"
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
  
        <div class="flex">
          <div class="flex">
            <div class="input-group relative flex flex-wrap items-stretch w-full">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-14px"
                placeholder="John Doe"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <button
                class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={findCustomersOnSearch}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
            &nbsp;
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              onClick={() => setShowCreateModal(true)}
            >
              <img src={createIcon} alt="" width="26px" />
            </button>
          </div>
        </div>
      </>
    )
  }
}
