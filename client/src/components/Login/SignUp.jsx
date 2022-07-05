import React, { useState } from "react";
import "./SignUp.css";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate } from "../../api/axios";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axiosPrivate.post("/auth/register", {
        name,
        email,
        password,
      });
      setError("");
      console.log(res?.data);
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
    <>
      <div className="container-fluid signup-form">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 signup-col order-md-2 order-sm-2 order-2 order-xl-first order-lg-2">
            <div className="form">
              <p className="form-heading">Let's get your account set up</p>
              <br />
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
                  <a href="">
                    I agree to
                    <span style={{ color: "blue", fontWeight: "500" }}>
                      {" "}
                      Tomaque's Terms of Service
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
