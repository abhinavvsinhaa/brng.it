import React, { useState } from "react";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate } from "../../api/axios";
import Loading from "../Loading/Loading";
import useRefreshToken from "../../hooks/useRefreshToken";

// Assets
import bannerBg from "../../assets/images/sp-login-image.png";

const Login = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axiosPrivate.post("/auth/login", {
        email,
        password,
      });
      setError("");
      console.log(res?.data);
      setAuth(res?.data);
      setLoading(false);
      localStorage.setItem("refresh", res?.data?.tokens?.refresh?.token);
      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res?.data?.tokens?.access?.token}`;
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
            <br />
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
              <br />
              <p className="password-requirements">{error}</p>
              <br />
              <button
                className="flex content-center justify-center btn btn-primary form-submit-btn"
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
                <a href="">Create account</a>
              </div>
              <div>
                <a href="">Forgot password?</a>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: "40px",
                fontSize: "14px",
                opacity: "0.8",
              }}
            >
              We no longer support social sign on. Please click here to set your
              password and access your account
            </p>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 image-col">
          <div className="banner-container">
            <span className="badge text-bg-light">Social Media Tool</span>
            <p className="banner heading">Skeduler</p>
            <br />
            <p>
              Skeduler lets you schedule your social media posts, shorten URLs,
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
