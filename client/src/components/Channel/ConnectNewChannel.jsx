import React, { useState } from "react";
import { Card } from "antd";
import "./Channel.css";
import axios, { axiosPrivate } from "../../api/axios";
import IG from "../../assets/images/ig-logo.png";
import FB from "../../assets/images/fb-icon.png";
import LinkedIn from "../../assets/images/linkedin-logo.png";
import IGConnectModal from "./IGConnectModal";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import useSearchCustomers from "./useSearchCustomers";
import FacebookLogin from "react-facebook-login";

const ConnectNewChannel = () => {
  // const { selectedProfile, render } = useSearchCustomers();

  const [code, setCode] = useState("");
  const [customer, setCustomer] = useState(null);
  const [longLivedUserAccessTokenFB, setLongLivedUserAccessTokenFB] =
    useState("");

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  async function linkedinCardClickValidate() {
    window.location.replace(
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${process.env.REACT_APP_SCOPES}`
    );
  }

  async function loadData() {
    const location = window.location.href;
    const arr = location.split("=");

    if (arr.length == 2) {
      setCode(arr[1]);
      console.log("code: " + arr[1]);

      const res = await axios.get(`/authorization/callback?code=${arr[1]}`);
      const response = await JSON.parse(res.data);
      console.log(response);
      const user = await axios.post("/authorization/user", response);
      console.log(JSON.parse(user.data));
    }
  }

  // store facebook credentials
  async function responseFacebookLogin(response) {
    console.log("short lived credentials", response);
    const user = auth.user;
    // stored short lived access token
    let res = await axios.patch(`/users/${user.id}`, {
      facebook: response,
    });

    // generate long lived access token and store
    fetch(
      `https://graph.facebook.com/v14.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&client_secret=${process.env.REACT_APP_FACEBOOK_CLIENT_SECRET}&fb_exchange_token=${response.accessToken}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then(async (result) => {
        console.log(result)
        console.log(result.access_token);
        res = await axios.patch(`/users/${user.id}`, {
          facebook: result.access_token,
        });

        // generate and store page access tokens
        fetch(
          `https://graph.facebook.com/v14.0/${response.id}/accounts?access_token=${result.access_token}`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then(async (result) => {  
            console.log(result)          
            res = await axiosPrivate.patch(
              `/users/${user.id}/subs?f=true`,
              result.data
            );
            console.log(res);
          })
          .catch((error) =>
            console.log(
              "error in generating and storing page access tokens",
              error
            )
          );
      })
      .catch((err) =>
        console.log("error generating long lived access token", err)
      );
  }

  React.useEffect(() => {
    // loadData();
  }, []);

  return (
    <div className="container connect-new-channel-container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          <br />
          <br />
          <p
            style={{
              fontWeight: 700,
              fontSize: "32px",
              margin: 0,
            }}
          >
            Connect a new channel
          </p>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.8,
              margin: 0,
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

          {/* Search Customer */}
          {/* {
            render
          } */}
        </div>
      </div>
      <br />

      {/* <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          <form>
            <label htmlFor="customer_name" className="form-label">Name</label>
            <input type="text" name="customer_name" id="customer_name" required placeholder="John Doe" className="textBox"/>
            <br /><br />
            <label htmlFor="customer_email" className="form-label">Email</label>
            <input type="email" name="customer_email" id="customer_email" placeholder="john@example.com" required className="textBox"/>
          </form>
        </div>
      </div>
      <br /> */}
      <div className="row justify-content-center gy-5">
        {/* <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
          <Card
            className="shadow-md"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: 350,
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
        </div> */}
        <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12">
          {/* <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          autoLoad={true}
          callback={responseFacebookLogin}
          render={renderProps => ( */}
          <Card
            className="shadow-md"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: 350,
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
              &nbsp;&nbsp;
              <img src={IG} alt="" width="50px" />
            </div>
            <br />
            <p className="social-media-subgroup">Page or Business account</p>
            <p className="social-media-name">Facebook & Instagram</p>
            <p className="social-media-connect">Connect</p>
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              autoLoad={false}
              callback={responseFacebookLogin}
              scope="public_profile,pages_show_list,pages_read_engagement,pages_manage_posts"
            />
          </Card>
          {/* )} */}
          {/* /> */}
        </div>
        <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12">
          <Card
            className="shadow-md"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: 350,
              alignItems: "center",
              textAlign: "center",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={linkedinCardClickValidate}
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
        </div>
      </div>
    </div>
  );
};

export default ConnectNewChannel;
