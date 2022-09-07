import React from "react";
import { useState } from "react";
import "../urlFront.css";
import SingleTreeUrl from "../../SingleTreeUrl/SingleTreeUrl";
import { Divider, notification } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import { axiosPrivate } from "../../../api/axios";
import ReactDevicePreview from "react-device-preview";
import TreePreview from "../TreePreview";
import { storage } from "../../../util/Firebase";
import defaultThemes from "./defaultThemes";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

// TODO: create individual folder for each new user, otherwise image name can match, which will replace the previous image with same name or add UUID

const Preview = ({ data, css }) => {
  return (
    <div className="App">
      <div>
        <ReactDevicePreview device="iphonex" scale="1">
          <TreePreview data={data} css={css} />
        </ReactDevicePreview>
      </div>
    </div>
  );
};

export default function LinkTree() {
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");
  const [description, setDescription] = useState("Description of your links!");
  const [pfp, setPfp] = useState(
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
  );
  const [bgUrl, setBgUrl] = useState("");
  const [bg, setBG] = useState(null);
  const [dp, setDP] = useState(null);
  const [ColMainUserName, setColMainUserName] = useState("Rhythm Shandlya");
  const [colMainUrlArr, setColMainUrlArr] = useState([]);
  const [colMainUrl, setColMainUrl] = useState([]);
  const [treeUrl, setTreeUrl] = useState([]);
  const [theme, setTheme] = useState(0);
  const [custom, setCustom] = useState(defaultThemes[0]);

  const themeImages = [
    "https://mfe-appearance.production.linktr.ee/images/selector-air-black.5105551e3a9ddafd3c2dd0a9e77eba8e.png",
    "https://mfe-appearance.production.linktr.ee/images/selector-snow.aea6aaa8f34b5aab24d7c1613a56238c.png",
    "https://mfe-appearance.production.linktr.ee/images/selector-leaf.73edfd8defcc4e7ccd1ae8fcfdc155c8.png",
    "https://mfe-appearance.production.linktr.ee/images/selector-moon.02b1fed163b6018d449d6bab0ae46d73.png",
    "https://mfe-appearance.production.linktr.ee/images/selector-smoke.0ceb5cab838b848707a45a858b28482a.png",
    "https://mfe-appearance.production.linktr.ee/images/selector-air-grey.4d1b030e5fd825ab08ecc1efe0e33a3a.png",
  ];

  const handleLinkTreeProfilePictureImageUpload = () => {
    if (!dp) {
      alert("Please choose a file");
      return;
    }

    // creating a reference inside bucket with file name
    const storageRef = ref(storage, `/image/${dp.name}`);

    // uploading file
    uploadBytes(storageRef, dp)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot.ref.toString());
        getDownloadURL(ref(storage, `image/${dp.name}`))
          .then((url) => {
            setPfp(url);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLinkTreeBackground = () => {
    if (!bg) {
      alert("Please choose a file");
      return;
    }

    // creating a reference inside bucket with file name
    const storageRef = ref(storage, `/image/${bg.name}`);

    // uploading file
    uploadBytes(storageRef, bg)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot.ref.toString());
        getDownloadURL(ref(storage, `image/${bg.name}`))
          .then((url) => {
            setBgUrl(url);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    try {
      const res = await axiosPrivate.post("/tree/combine", {
        original: colMainUrlArr,
        name: ColMainUserName,
        description,
        dp: pfp,
        css: custom,
        bg: bgUrl,
      });
      console.log(res);
      setTreeUrl(res.data.data);
      setColMainUrlArr([]);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <div className="flex">
      <div className="mx-20 my-10">
        <div className="row justify-content-center">
          <div>
            <div className="form-label urlHead">Linktree</div>
            <p className="text-14px" style={{ opacity: 0.8 }}>
              Linktree allows you to create a personalized and customizable page
              that houses all the important links that you want to share with
              your audience.
            </p>
            <input
              type="text"
              name="colMainUrl"
              placeholder="Tree Name"
              value={ColMainUserName}
              onChange={(e) => {
                setColMainUserName(e.target.value);
              }}
              className="form-control mb-3"
              id="urlCol"
            />
            <textarea
              type="text"
              name="colMainUrl"
              placeholder="Tree Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="form-control"
              id="urlCol"
            />
            <br />

            <div className="flex items-end my-3">
              <div>
                <label
                  for="formFile"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Choose A Profile Picture
                </label>
                <input
                  type="file"
                  name="imageupload"
                  id="imageupload"
                  className="form-control block w-[300px] px-2 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  onChange={(e) => {
                    setDP(e.target.files[0]);
                  }}
                />
              </div>
              <button
                onClick={handleLinkTreeProfilePictureImageUpload}
                className="btn url-submit-btn h-[38px] mx-3"
              >
                Upload
              </button>
            </div>
            {/* Image file upload */}
            <div className="flex items-end my-3">
              <div>
                <label
                  for="formFile"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Choose A Background Image (optional)
                </label>
                <input
                  type="file"
                  name="imageupload"
                  id="imageupload"
                  className="form-control block w-[300px] px-2 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  onChange={(e) => {
                    setBG(e.target.files[0]);
                  }}
                />
              </div>
              <button
                onClick={handleLinkTreeBackground}
                className="btn url-submit-btn h-[38px] mx-3"
              >
                Upload
              </button>
            </div>

            <p>Select Theme:</p>
            <div className="flex">
              {themeImages.map((src, i) => {
                return (
                  <button
                    className="w-[90px] m-2"
                    key={i}
                    onClick={() => {
                      setTheme(i);
                      setCustom(defaultThemes[i]);
                    }}
                  >
                    <img src={src} alt="" />
                  </button>
                );
              })}
            </div>
            <br />

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
                className="form-control"
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
                className="form-control"
                id="urlCol"
                aria-describedby="emailHelp"
              />
              <br />
              <span style={{ fontWeight: 500 }}>My Linktree: </span>
              <SingleTreeUrl treeArr={treeUrl} />
              <Divider />
              {colMainUrlArr &&
                colMainUrlArr.map((url, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="linktreeurl-description shadow-sm"
                      >
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
                            <button
                              className="delete-button p-1 ml-3"
                              onClick={() => {
                                const newArr = colMainUrlArr.filter(
                                  (_ele, ind) => ind !== i
                                );
                                setColMainUrlArr(newArr);
                              }}
                            >
                              <DeleteIcon
                                sx={{
                                  fontSize: "10px",
                                  color: "white",
                                }}
                              />
                            </button>
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
                      </div>
                      <br />
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Preview
          data={{
            original: colMainUrlArr,
            name: ColMainUserName,
            description,
            image: pfp,
            backgroundImage: bgUrl,
          }}
          css={custom}
          setCss={setCustom}
        />
      </div>
    </div>
  );
}