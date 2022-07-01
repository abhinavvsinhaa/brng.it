import React, { useState } from "react";
import "./SignUp.css";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate } from "../../api/axios";

const SignUp = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("choose a strong password!");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.post("/register", {
        email,
        password,
      });
      console.log(response?.data);
      setAuth(response?.data);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setError("No Server Response");
      } else if (err.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <>
      <div className="container-fluid signup-form">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 signup-col order-md-2 order-sm-2 order-2 order-xl-first order-lg-2">
            <div className="form">
              <p className="form-heading">Let's get your account set up</p>
              <br />
              <form action="">
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
                <br />
                <p className="password-requirements">{error}</p>
                <br />
                <button
                  onClick={handleClick}
                  className="btn btn-primary form-submit-btn"
                >
                  Sign Up
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
                  <a href="">
                    I agree to
                    <span style={{ color: "blue", fontWeight: "500" }}>
                      {" "}
                      Skeduler's Terms of Service
                    </span>
                  </a>
                </div>
                <div>
                  <a href="">Already have an account?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 img-col-signup"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
