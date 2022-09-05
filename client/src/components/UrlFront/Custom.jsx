import React from "react";
import { useState } from "react";
import "./UrlFront.css";
import SingleTreeUrl from "../SingleTreeUrl/SingleTreeUrl";
import { Divider, notification } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import { axiosPrivate } from "../../api/axios";
import defaultThemes from "./defaultThemes";
import ReactDevicePreview from "react-device-preview";
import TreePreview from "./TreePreview";
import { storage } from "../../util/Firebase";
import CustomForm from "./CustomForm";
import FileUpload from "../FileUpload";
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
  const [ColMainUserName, setColMainUserName] = useState("Rhythm Shandlya");
  const [colMainUrlArr, setColMainUrlArr] = useState([]);
  const [colMainUrl, setColMainUrl] = useState([]);
  const [treeUrl, setTreeUrl] = useState([]);
  const [iconUrl, setIconUrl] = useState("");
  const [custom, setCustom] = useState(defaultThemes[0]);

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
            <div className="form-label urlHead">Custom Page Builder: </div>
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
            <h2 className="my-4 text-lg">Customize your tree: </h2>
            <div className="h-[450px] overflow-y-auto border-2 border-gray-500 p-4">
              <FileUpload
                setFileUrl={setPfp}
                inputLabel="Choose A Profile Picture: "
                inputLabelColor="#000000"
                remove={true}
              />
              <FileUpload
                setFileUrl={setBgUrl}
                inputLabel="Choose A Background Image (optional)"
                inputLabelColor="#000000"
                remove={true}
              />

              <br />
              <p>Make Your Theme:</p>
              <CustomForm setCustom={setCustom} custom={custom} />
              <br />
            </div>
            <div className="bg-blue-500 p-4 my-4 rounded-lg">
              <h2 className="text-white text-lg py-2">Link Settings:</h2>
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
              <button onClick={addMainUrl} className="btn btn-light px-4 py-2">
                Add Link
              </button>
              <FileUpload
                setFileUrl={setIconUrl}
                inputLabel="Choose An Icon:"
                remove={true}
              />
              <img src={iconUrl} alt="loading.." />
            </div>
            <button
              onClick={convertLinkUrl}
              className="btn url-success-btn w-full my-3"
            >
              Generate
            </button>
            <br />
            <span style={{ fontWeight: 500 }}>My Linktree: </span>
            <SingleTreeUrl treeArr={treeUrl} />
            <Divider />
            {colMainUrlArr &&
              colMainUrlArr.map((url, i) => {
                return (
                  <>
                    <div key={i} className="linktreeurl-description shadow-sm">
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
