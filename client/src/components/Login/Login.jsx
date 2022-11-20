import React, { useState } from "react";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate, axiosIgnoreInterceptor } from "../../api/axios";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
// Assets
import bannerBg from "../../assets/images/sp-login-image.png";
import { Divider } from "antd";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";
import { useEffect } from "react";

const Login = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
  const [googleError,setgoogleError] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSuccessLogin = async (userData) => {
    const name = userData.profileObj.name;
    const userEmail = userData.profileObj.email;
    const userPassword = userData.googleId;
    setLoading(true);
    console.log(userEmail)
    try {
      setLoading(true);
      const res = await axiosIgnoreInterceptor.post("/auth/login-google", {
        name,
        email:userEmail,
        password:userPassword+'-'+userEmail,
      });
      setError("");
      setAuth({ ...res?.data, isAuthenticated: true });
      setLoading(false);
      localStorage.setItem("refresh", res?.data?.tokens?.refresh?.token);
      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res?.data?.tokens?.access?.token}`;
      navigate("/");
    } catch (err) {
      setgoogleError(true);
      openNotificationWithIcon('error','',err?.response?.data?.message)
      setError(err?.response?.data?.message);
    }
  }

  const onFailureLogin = (res) => {
    console.log(res);
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axiosIgnoreInterceptor.post("/auth/login", {
        email,
        password,
      });
      setError("");
      setAuth({ ...res?.data, isAuthenticated: true });
      setLoading(false);
      localStorage.setItem("refresh", res?.data?.tokens?.refresh?.token);
      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res?.data?.tokens?.access?.token}`;
      navigate("/");
    } catch (err) {
      openNotificationWithIcon('error','',err?.response?.data?.message)
      setError(err?.response?.data?.message);
    }
  };
  
  return (
    <div className="container-fluid login-form">
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-col">
          <div className="form">
            <p className="form-heading">Log in</p>
            <form action="">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <p className="password-requirements">{error}</p>
              <br />
              <button
                className="flex content-center justify-center btn form-submit-btn"
                onClick={handleClick}
              >
                <span>Login</span>
                <Loading display={loading} />
              </button>
            </form>
            {/* Create Account or Forgot Password */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              <div>
                <a href="/signup">Create account</a>
              </div>
              <div>
                <a href="">Forgot password?</a>
              </div>
            </div>

            <Divider />
            <div class="google-btn" >
              {/* <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              </div>
              <div>
                <p class="btn-text">Sign in with Google</p>
              </div> */}
              <GoogleLogin
                clientId="222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={onSuccessLogin}
                onFailure={onFailureLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 image-col">
          <div className="banner-container">
            <span
              className="badge text-light"
              style={{ backgroundColor: "var(--index)" }}
            >
              Social Media Tool
            </span>
            <p className="banner heading">Tomaque</p>
            <p>
              Tomaque lets you schedule your social media posts, shorten URLs,
              and generate some cool email signatures.
            </p>
          </div>
          <img src={bannerBg} alt="" className="banner-bg-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
