import React, { useState } from "react";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate, axiosIgnoreInterceptor } from "../../api/axios";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { GoogleAuth } from "../../util/Firebase";
// import {GoogleLogin, hasGrantedAllScopesGoogle, useGoogleLogin} from '@react-oauth/google';
import getPkce from 'oauth-pkce';
import {GoogleLogin} from 'react-google-login';
// Assets
import bannerBg from "../../assets/images/sp-login-image.png";
import { Divider } from "antd";
import axios from "axios";

const Login = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSuccessLogin = (res) => {
    // console.log(res);
    // const hasAccess = hasGrantedAllScopesGoogle(res,'https://www.googleapis.com/auth/gmail.settings.basic');
    // console.log("I got: ",hasAccess);
    // var code = res.code;
    // getPkce(43,async(error,{verifier,challenge})=>{
    //   if(!error){
    //     const code_res = await axios.post("https://oauth2.googleapis.com/token",{client_id:"222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com",client_secret:"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",code,grant_type:"authorization_code",redirect_uri:"http://localhost:3000",scope:"email profile https://www.googleapis.com/auth/gmail.settings.basic"})
    //     const refToken = code_res.data.refresh_token
    //     const finalCall = await axiosIgnoreInterceptor.post("/wisestamp", {
    //       refToken
    //     }); 
    //   }
    // })
  }

  const onFailureLogin = (res) => {
    console.log(res);
  }
  // const googleLogin = useGoogleLogin({
  //   onSuccess: codeRes => onSuccessLogin(codeRes),
  //   onError: err => console.log(err),
  //   flow: 'auth-code'
  // })
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
      console.log(err?.response);
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

            <Divider/>
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
