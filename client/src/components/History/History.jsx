import React, { useEffect, useState } from "react";
import { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import "./History.css";
import imageIcon from "../../assets/icons/image-icon.png";

const History = () => {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const { auth, setAuth } = useAuth();

  const fetchHistory = async () => {
    console.log("called fetch history");
    const promises = auth.user.history.map(async (id) => {
      const histories = new Promise(async (resolve, reject) => {
        const response = await axiosPrivate.get(`/history/${id}`);
        resolve(response.data);
      });

      return histories;
    });

    const historyy = await Promise.all(promises);
    setHistory(historyy);
    setLoading(false);
    console.log(historyy);
  };

  useEffect(() => {
    console.log("fetching history");
    fetchHistory();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          {loading == true ? (
            <>Loading...</>
          ) : (
            <>
              {history.map((post, i) => {
                return (
                  <div className="post-history" key={i}>
                    <div className="date-platform-div">
                      <p>
                        📅 {post.date}
                        <span
                          style={{
                            fontSize: "0.75rem",
                            opacity: 0.8,
                            fontWeight: "normal",
                          }}
                        >
                          &nbsp; (GMT + 5.30)
                        </span>
                      </p>
                    </div>
                    <div className="post-history-box shadow-sm">
                      <div className="history-box-post-details">
                        <p>🗒 {post.caption}</p>
                        {post.images.length == 0 ? (
                            <div className="no-image-attached-div">
                                <img
                                src={imageIcon}
                                alt=""
                                className="history-image"
                                />
                                <p>No image attached</p>
                            </div>
                        ) : (
                          <img
                            src={post.images[0]}
                            alt=""
                            className="history-image"
                            width="100px"
                          />
                        )}
                      </div>
                      <div className="history-box-footer-div">
                        <p className="history-box-footer">
                          {post.type} post | Posted on {post.platform}
                        </p>
                        <p className="history-box-footer">
                            Account ID: {post.accountId}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
