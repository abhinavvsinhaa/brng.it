import React from "react";
import { Card } from "antd";
import './Channel.css'

// importing logos
import IG from '../../assets/images/ig-logo.png';
import FB from '../../assets/images/fb-icon.png'
import LinkedIn from '../../assets/images/linkedin-logo.png'


const ConnectNewChannel = () => {
    return (
        <div className="container connect-new-channel-container">
            <div className="row justify-content-center gy-5">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p style={{
                        fontWeight: 700,
                        fontSize: '32px'
                    }}>
                        Connect a new channel
                    </p>
                    <p style={{
                        fontSize: '14px',
                        opacity: 0.8
                    }}>
                        Looking for step-by-step instructions? Visit our Help Center to read our
                        <span style={{color: '#3A62FE', fontWeight: 500}}> Getting Started </span>
                        guides and learn about supported channel types.
                    </p>
                </div>
            </div>
            <br />
            <div className="row justify-content-center gy-5">
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Card className="shadow-md" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        height: 200,
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '5px'
                    }}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <img src={IG} alt="" width="50px"/>
                        </div>
                        <p className="social-media-name">Instagram</p>
                        <p className="social-media-subgroup">Business account</p>
                        <p className="social-media-connect">Connect</p>
                    </Card>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Card className="shadow-md" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        height: 200,
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '5px'
                    }}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <img src={FB} alt="" width="50px"/>
                        </div>
                        <p className="social-media-name">Facebook</p>
                        <p className="social-media-subgroup">Page or Group</p>
                        <p className="social-media-connect">Connect</p>
                    </Card>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Card className="shadow-md" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        height: 200,
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '5px',
                    }}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <img src={LinkedIn} alt="" width="50px"/>
                        </div>
                        <p className="social-media-name">LinkedIn</p>
                        <p className="social-media-subgroup">Page or Profile</p>
                        <p className="social-media-connect">Connect</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ConnectNewChannel;