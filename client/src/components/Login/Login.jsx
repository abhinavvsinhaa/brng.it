import React from "react";
import './Login.css';

// Assets
import bannerBg from '../../assets/images/sp-login-image.png'

const Login = () => {
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
                            <input type="email" name="email" id="email" required/>
                            <br /><br />
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password" name="password" id="password" required/>
                            <br /><br />
                            <button className="btn btn-primary form-submit-btn">Log In</button>
                        </form>
                        
                        {/* Create Account or Forgot Password */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            fontSize: '14px'
                        }}>
                            <div>
                                <a href="">Create account</a>
                            </div>
                            <div>
                                <a href="">Forgot password?</a>
                            </div>
                        </div>

                        <p style={{
                            textAlign: 'center',
                            marginTop: '40px',
                            fontSize: '14px',
                            opacity: '0.8'
                        }}>
                            We no longer support social sign on. Please click here to set your password and access your account
                        </p>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 image-col">
                    <div className="banner-container">
                        <span class="badge text-bg-light">Social Media Tool</span>
                        <p className="banner heading">
                            Skeduler
                        </p>
                        <br />
                        <p>Skeduler lets you schedule your social media posts, shorten URLs, and generate some cool email signatures.</p>
                    </div>
                    <img src={bannerBg} alt="" className="banner-bg-image"/>
                </div>
            </div>
        </div>
    );
}

export default Login;