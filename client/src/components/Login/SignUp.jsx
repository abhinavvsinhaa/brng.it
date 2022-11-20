import React, { useState } from "react";
import "./SignUp.css";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate, axiosIgnoreInterceptor } from "../../api/axios";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Button, message, Space } from "antd";

// Assets
import bannerBg from "../../assets/images/sp-login-image.png";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";

const SignUp = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [termsAndService, setTermsAndService] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (termsAndService === true) {
        setLoading(true);
        const res = await axiosIgnoreInterceptor.post("/auth/register", {
          name,
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
        navigate("/share");
      } else {
        return openNotificationWithIcon("error", "Please accept terms and service.");
      }
    } catch (err) {
      setLoading(false);
      console.log(err?.response);
      openNotificationWithIcon("error", err?.response?.data?.message)
      setError(err?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="container-fluid signup-form">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 form-col signup-col order-md-2 order-sm-2 order-2 order-xl-first order-lg-2">
            <div className="form">
              <p className="form-heading">Let's get your account set up</p>
              {/* <br /> */}
              <form action="">
                <label htmlFor="email">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Create a Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {/* <p className="password-requirements">{error}</p> */}
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    name="termsandservice"
                    id="termsandservice"
                    style={{ width: "20px", padding: 0 }}
                    onChange={() => setTermsAndService(!termsAndService)}
                  />
                  &nbsp;&nbsp;
                  <p style={{ margin: 0 }}>
                    I agree to
                    <a
                      style={{ color: "blue", fontWeight: "500" }}
                      href="https://brng.it/app/termsofservice"
                      target="__blank"
                    >
                      {" "}
                      Brng.it's Terms of Service
                    </a>
                  </p>
                </div>
                <br />
                <button
                  onClick={handleClick}
                  className="flex content-center justify-center btn btn-primary form-submit-btn"
                >
                  <span>Sign Up</span> <Loading display={loading} />
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
                  <a href="/app/login">Already have an account?</a>
                </div>
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
    </>
  );
};

export default SignUp;
