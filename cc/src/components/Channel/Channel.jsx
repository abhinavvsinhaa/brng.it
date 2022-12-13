import React from "react";
import { Link } from "react-router-dom";

const Channel = () => {
    return (
        <div className="container">
            <div className="row justify-content-center" style={{height: '100vh'}}>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" style={{
                        // backgroundColor: 'red',
                    }}>
                    <p style={{
                        fontWeight: 700,
                        fontSize: '32px'
                    }}>
                        Channels
                    </p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div>
                        {/* <button style={{
                            backgroundColor: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            border: '1px solid #B8B8B8',
                        }}>
                            Add or Remove Channels
                        </button> */}
                        <Link to='/dashboard/channels/connect'>
                            <button style={{
                                backgroundColor: '#213CA3',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontSize: '14px',
                                color: 'white'
                            }}>
                                Connect Channel
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Channel;