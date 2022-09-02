import React, { useState, useEffect } from "react";
import { Modal as ModalAntD, Input, Tooltip, Divider, Checkbox } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Facebook from "@mui/icons-material/Facebook";

const CheckboxGroup = Checkbox.Group;

const Team = () => {
  const { auth, setAuth } = useAuth();
  const [addTeamMemberModal, setAddTeamMemberModal] = useState(false);
  const [facebookSubscription, setFacebookSubscription] = useState([]);
  const [instagramSubscription, setInstagramSubscription] = useState([]);
  const [linkedinSubscription, setLinkedInSubscription] = useState([]);

  const getSubscriptions = async () => {
    let arr = [];
    auth.user.facebookSub.map((sub) => {
      return arr.push({ label: sub.name, value: sub.id });
    });
    setFacebookSubscription(arr);
    arr = [];

    // todo: for instagram and linkedin
  };

  const handleCloseModal = () => setAddTeamMemberModal(false);

  const handleOKAddTeamMemberModal = () => {};

  const handleCheckboxChange = () => {};

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
              onChange={handleCheckboxChange}
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
