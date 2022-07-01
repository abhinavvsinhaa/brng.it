import React from "react";

const Channel = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" style={{
                        // backgroundColor: 'red'
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
                        <button style={{
                            backgroundColor: '#3A62FE',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            color: 'white'
                        }}>
                            Connect Channel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Channel;