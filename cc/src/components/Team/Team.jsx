import React, { useState, useEffect } from "react";
import { Modal as ModalAntD, Input, Tooltip, Divider, Checkbox } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import axios, { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";

const CheckboxGroup = Checkbox.Group;

const Team = () => {
  const { auth, setAuth } = useAuth();
  const [addTeamMemberModal, setAddTeamMemberModal] = useState(false);
  const [facebookSubscription, setFacebookSubscription] = useState([]);
  const [instagramSubscription, setInstagramSubscription] = useState([]);
  const [linkedinSubscription, setLinkedInSubscription] = useState([]);
  const [facebookAccountsChecked, setFacebookAccountsChecked] = useState([])
  const [linkedinAccountsChecked, setLinkedinAccountsChecked] = useState([])
  const [teamMemberEmail, setTeamMemberEmail] = useState(null)

  const getSubscriptions = async () => {
    let arr = [];
    auth.user.facebookSub.map((sub) => {
      return arr.push({ label: sub.name, value: sub.id });
    });
    setFacebookSubscription(arr);
    
    // todo: for linkedin
    arr = [];
    auth.user.linkedinSub.map(sub => {
      return arr.push({ label: sub.localizedFirstName + " " + sub.localizedLastName, value: sub.id })
    })
    setLinkedInSubscription(arr);
  };

  const handleCloseModal = () => 
  {
    setAddTeamMemberModal(false);
    setLinkedInSubscription([])
    setFacebookSubscription([])
    setFacebookAccountsChecked([])
    setLinkedinAccountsChecked([])
  }

  const handleOKAddTeamMemberModal = async () => {
    if (teamMemberEmail == null)
      return openNotificationWithIcon("error", "Please fill a valid email address.")
    
    console.log(facebookAccountsChecked, linkedinAccountsChecked)
    if (facebookAccountsChecked.length == 0 && linkedinAccountsChecked.length == 0)
      return openNotificationWithIcon("warning", "Please select at least one account.")
    
    const res = await axiosPrivate.post('/addteammember', {
      userEmail: auth.user.email,
      teamMemberEmail,
      facebookAccounts: facebookAccountsChecked,
      linkedinAccounts: linkedinAccountsChecked
    })

    if (res.data == true) {
      handleCloseModal();
      openNotificationWithIcon("success", `Accounts added successfully to ${teamMemberEmail}`)
    }

    else {
      handleCloseModal();
      console.log(res.data)
      openNotificationWithIcon("error", "Accounts could not be added, please try again.")
    }
  };

  const handleCheckboxChangeFB = (value) => {
    setFacebookAccountsChecked([...facebookAccountsChecked, value])
  };

  const handleCheckboxChangeLinkedIn = (value) => {
    setLinkedinAccountsChecked([...linkedinAccountsChecked, value])
  };

  useEffect(() => {
    // get all subscriptions for the user
    getSubscriptions();
  }, []);

  return (
    <>
      <ModalAntD
        title="Add users"
        visible={addTeamMemberModal}
        onCancel={handleCloseModal}
        onOk={handleOKAddTeamMemberModal}
      >
        <p style={{ fontSize: "14px", margin: 0 }}>
          Add unlimited team members, colleagues, friends, family or anyone who
          can help you manage your social calendar.
        </p>
        <br />
        <Input
          placeholder="work email address"
          type="email"
          value={teamMemberEmail}
          onChange={e => setTeamMemberEmail(e.target.value)}
          suffix={
            <Tooltip title="Must be a user">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        {facebookSubscription != [] ? (
          <>
            <p style={{ marginTop: "20px", opacity: 0.8 }}>
              <Facebook /> Facebook
            </p>
            <Divider style={{ margin: "12px 0" }} />
            <CheckboxGroup
              options={facebookSubscription}
              onChange={handleCheckboxChangeFB}
            />
          </>
        ) : (
          <></>
        )}
        {linkedinSubscription != [] ? (
          <>
            <p style={{ marginTop: "20px", opacity: 0.8 }}>
              <LinkedIn /> LinkedIn
            </p>
            <Divider style={{ margin: "12px 0" }} />
            <CheckboxGroup
              options={linkedinSubscription}
              onChange={handleCheckboxChangeLinkedIn}
            />
          </>
        ) : (
          <></>
        )}
      </ModalAntD>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#F5f5f5",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "40px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <p>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    Add your team member
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      opacity: "0.8",
                    }}
                  >
                    Add unlimited team members, colleagues, friends, family or
                    anyone who can help you manage your social calendar.
                  </span>
                </p>
              </div>
              <button
                className="btn btn-share-post"
                onClick={() => setAddTeamMemberModal(true)}
              >
                Add team member
              </button>
            </div>
            <Divider style={{ margin: '20px 0' }}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
            <p>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Your team members
              </span>
              <br />
              <span
                style={{ fontWeight: 400, fontSize: "14px", opacity: "0.8" }}
              >
                The list of team members added by you to manage your social
                accounts.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
