import React from "react";
import { useState } from "react";
import "./UrlFront.css";
import axios from "axios";
import SingleTreeUrl from "../SingleTreeUrl/SingleTreeUrl";
import { Divider, notification } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ResponsiveDrawer from "../Navigation/ResponsiveDrawer";

export default function LinkTree() {
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");

  const [ColMainUserName, setColMainUserName] = useState("");
  const [colMainUrlArr, setColMainUrlArr] = useState([]);

  const [colMainUrl, setColMainUrl] = useState([]);

  const [treeUrlArr, setTreeUrlArr] = useState([]);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Link added",
      description: link,
    });
  };

  const addMainUrl = () => {
    setColMainUrlArr((colMainUrlArr) => [
      ...colMainUrlArr,
      { link, title: linkName },
    ]);
    console.log(colMainUrlArr);
    openNotificationWithIcon("success");
    setLink("");
    setLinkName("");
    setColMainUrl("");
  };

  const convertLinkUrl = async () => {
    const res = await axios.post("http://localhost:8000/v1/tree/combine", {
      original: colMainUrlArr,
      name: ColMainUserName,
    });
    setTreeUrlArr((treeUrlArr) => [...treeUrlArr, res.data.data]);
    setColMainUrlArr([]);
  };

  return (
    <>
      <div className="container url-container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="urlContainer">
              <div class="form-label urlHead">Linktree</div>
              <p className="text-14px" style={{ opacity: 0.8 }}>
                Linktree allows you to create a personalized and customizable
                page that houses all the important links that you want to share
                with your audience.
              </p>
                <button onClick={addMainUrl} class="btn url-submit-btn">
                  Add Link
                </button>
                <button
                  onClick={convertLinkUrl}
                  class="btn url-success-btn mx-2"
                >
                  Generate
                </button>
                <br /><br />
              <input
                type="text"
                name="colMainUrl"
                placeholder="John Doe"
                onChange={(e) => {
                  setColMainUserName(e.target.value);
                }}
                class="form-control textBox"
                id="urlCol"
                aria-describedby="emailHelp"
              />
              <br />
              <div>
                <input
                  type="text"
                  name="colMainUrl"
                  placeholder="Facebook"
                  onChange={(e) => {
                    setLinkName(e.target.value);
                  }}
                  class="form-control textBox"
                  id="urlCol"
                  aria-describedby="emailHelp"
                />
                <br />
                <input
                  type="text"
                  name="colMainUrl"
                  placeholder="https://www.facebook.com/john"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  class="form-control textBox"
                  id="urlCol"
                  aria-describedby="emailHelp"
                />
                {treeUrlArr &&
                treeUrlArr.map((p, i) => {
                  return (
                    <>
                      <br />
                      <span style={{fontWeight: 500}}>My Linktree: </span>&nbsp;
                      <SingleTreeUrl id={i} treeArr={p} />
                    </>
                  );
                })}

                <Divider/>
                {colMainUrlArr &&
                  colMainUrlArr.map((url, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          className="linktreeurl-description shadow-sm"
                        >
                          {/* url title */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "500",
                                fontSize: "14px",
                              }}
                            >
                              {url.title}
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              <a href={url.link}>{url.link}</a>
                            </span>
                          </div>
                          <button className="delete-button">
                            <DeleteIcon
                              sx={{
                                fontSize: "14px",
                                color: "white",
                              }}
                            />
                          </button>
                          <button className="edit-button">
                            <EditIcon
                              sx={{
                                fontSize: "14px",
                                color: "white",
                              }}
                            />
                          </button>
                        </div>
                        <br />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
