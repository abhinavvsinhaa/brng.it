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
  const [description, setDescription] = useState("");

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
      description,
    });
    console.log(res);
    setTreeUrlArr((treeUrlArr) => [...treeUrlArr, res.data.data]);
    setColMainUrlArr([]);
  };

  return (
    <>
      <div className="container url-container">
        <div className="row justify-content-center">
          <div className="lg:ml-96">
            <div className="urlContainer">
              <div className="form-label urlHead">Linktree</div>
              <input
                type="text"
                name="colMainUrl"
                placeholder="Tree Name"
                onChange={(e) => {
                  setColMainUserName(e.target.value);
                }}
                className="form-control textBox mb-3"
                id="urlCol"
                aria-describedby="emailHelp"
              />
              <textarea
                type="text"
                name="colMainUrl"
                placeholder="Tree Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="form-control textBox"
                id="urlCol"
              />
              <br />
              <p className="text-14px" style={{ opacity: 0.8 }}>
                Linktree allows you to create a personalized and customizable
                page that houses all the important links that you want to share
                with your audience.
              </p>
              <button onClick={addMainUrl} className="btn url-submit-btn">
                Add Link
              </button>
              <button
                onClick={convertLinkUrl}
                className="btn url-success-btn mx-2"
              >
                Generate
              </button>
              <br />
              <br />
              <div>
                <input
                  type="text"
                  name="colMainUrl"
                  placeholder="Facebook"
                  value={linkName}
                  onChange={(e) => {
                    setLinkName(e.target.value);
                  }}
                  className="form-control textBox"
                  id="urlCol"
                />
                <br />
                <input
                  type="text"
                  name="colMainUrl"
                  value={link}
                  placeholder="https://www.facebook.com/john"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  className="form-control textBox"
                  id="urlCol"
                  aria-describedby="emailHelp"
                />
                {treeUrlArr &&
                  treeUrlArr.map((p, i) => {
                    return (
                      <>
                        <br />
                        <span style={{ fontWeight: 500 }}>My Linktree: </span>
                        &nbsp;
                        <SingleTreeUrl id={i} treeArr={p} />
                      </>
                    );
                  })}

                <Divider />
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
                          <button
                            className="delete-button"
                            onClick={() => {
                              const newArr = colMainUrlArr.filter(
                                (_ele, ind) => ind !== i
                              );
                              setColMainUrlArr(newArr);
                            }}
                          >
                            <DeleteIcon
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
