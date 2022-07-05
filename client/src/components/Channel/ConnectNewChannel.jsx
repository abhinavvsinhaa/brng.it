import React from "react";
import { Card } from "antd";
import "./Channel.css";

import axios from '../../api/axios';

// importing logos
import IG from "../../assets/images/ig-logo.png";
import FB from "../../assets/images/fb-icon.png";
import LinkedIn from "../../assets/images/linkedin-logo.png";
import IGConnectModal from "./IGConnectModal";
import { useState } from "react";

const ConnectNewChannel = () => {
  const [code, setCode] = useState("");

  async function loadData() {
    const location = window.location.href;
    const arr = location.split("=");

    if (arr.length == 2) {
      setCode(arr[1]);
      console.log("code: " + arr[1]);
      
      const res = await axios.get(`/authorization/callback?code=${arr[1]}`);
      const response = await JSON.parse(res.data);
      const user = await axios.post('/authorization/user', response);
      console.log(JSON.parse(user.data));
    }
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container connect-new-channel-container">
      <div className="row justify-content-center gy-5">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          <p
            style={{
              fontWeight: 700,
              fontSize: "32px",
            }}
          >
            Connect a new channel
          </p>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.8,
            }}
          >
            Looking for step-by-step instructions? Visit our Help Center to read
            our
            <span style={{ color: "#3A62FE", fontWeight: 500 }}>
              {" "}
              Getting Started{" "}
            </span>
            guides and learn about supported channel types.
          </p>
        </div>
      </div>
      <br />
      <div className="row justify-content-center gy-5">
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
          <Card
            className="shadow-md"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: 200,
              alignItems: "center",
              textAlign: "center",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => <IGConnectModal visible={true} />}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={IG} alt="" width="50px" />
            </div>
            <p className="social-media-name">Instagram</p>
            <p className="social-media-subgroup">Business account</p>
            <p className="social-media-connect">Connect</p>
          </Card>
        </div>
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
          <Card
            className="shadow-md"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: 200,
              alignItems: "center",
              textAlign: "center",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={FB} alt="" width="50px" />
            </div>
            <p className="social-media-name">Facebook</p>
            <p className="social-media-subgroup">Page or Group</p>
            <p className="social-media-connect">Connect</p>
          </Card>
        </div>
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
          <a
            href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${process.env.REACT_APP_SCOPES}`}
          >
            <Card
              className="shadow-md"
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                height: 200,
                alignItems: "center",
                textAlign: "center",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={LinkedIn} alt="" width="50px" />
              </div>
              <p className="social-media-name">LinkedIn</p>
              <p className="social-media-subgroup">Page or Profile</p>
              <p className="social-media-connect">Connect</p>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectNewChannel;
