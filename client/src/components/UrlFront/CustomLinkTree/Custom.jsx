import React from "react";
import { useState } from "react";
import SingleTreeUrl from "../../SingleTreeUrl/SingleTreeUrl";
import { Divider, notification } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import { axiosPrivate } from "../../../api/axios";
import defaultThemes from "../LinkTree/defaultThemes";
import ReactDevicePreview from "react-device-preview";
import TreePreview from "../TreePreview";
import CustomForm from "./CustomForm";
import FileUpload from "../../FileUpload";
import { Switch } from "antd";

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

export default function CustomLinkTree() {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  const [linkName, setLinkName] = useState("");
  const [description, setDescription] = useState("Description of your links!");
  const [iconUrl, setIconUrl] = useState("");
  const [linkImageUrl, setLinkImageUrl] = useState("");
  const [linkDescriptionText, setLinkDescriptionText] = useState("");

  const [pfp, setPfp] = useState(
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
  );
  const [bgUrl, setBgUrl] = useState("");
  const [ownerName, setColMainUserName] = useState("Rhythm Shandlya");
  const [treeUrl, setTreeUrl] = useState([]);
  const [custom, setCustom] = useState(defaultThemes[0]);

  /* Conditionally Render Components */
  const [icon, setIcon] = useState(false);
  const [linkImage, setLinkImage] = useState(false);
  const [linkDescription, setLinkDescription] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Link added",
      description: link,
    });
  };

  const addLink = () => {
    setLinks((links) => [
      ...links,
      {
        link,
        title: linkName,
        haveIcon: icon,
        haveImage: linkImage,
        haveDescription: linkDescription,
        icon: iconUrl,
        image: linkImageUrl,
        description: linkDescriptionText,
      },
    ]);

    openNotificationWithIcon("success");
    setLink("");
    setLinkName("");
    setIconUrl("");
    setLinkDescriptionText("");
  };

  const deleteLink = (i) => {
    const newArr = links.filter((_ele, ind) => ind !== i);
    setLinks(newArr);
  };

  const convertLinkUrl = async () => {
    try {
      const res = await axiosPrivate.post("/tree/combine", {
        original: links,
        name: ownerName,
        description,
        dp: pfp,
        css: custom,
        bg: bgUrl,
      });
      console.log(res);
      setTreeUrl(res.data.data);
      setLinks([]);
    } catch (e) {
      console.log(e.response);
    }
  };

  const iconSwitch = () => {
    if (!icon) {
      setIcon(true);
    } else {
      setIcon(false);
      setIconUrl("");
    }
  };

  const linkImageSwitch = () => {
    if (!linkImage) {
      setLinkImage(true);
    } else {
      setLinkImage(false);
      setLinkImageUrl("");
    }
  };

  const linkDescriptionSwitch = () => {
    if (!linkDescription) {
      setLinkDescription(true);
    } else {
      setLinkDescription(false);
      setLinkDescriptionText("");
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
              value={ownerName}
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
              <span className="text-white">ADD ICON &nbsp;</span>
              <Switch onChange={iconSwitch} />

              <span className="text-white">&nbsp; &nbsp; ADD IMAGE &nbsp;</span>
              <Switch onChange={linkImageSwitch} />

              <span className="text-white">&nbsp; &nbsp; ADD DESC &nbsp;</span>
              <Switch onChange={linkDescriptionSwitch} />

              {!linkDescription && (
                <>
                  <br />
                  <br />
                </>
              )}
              {icon && (
                <FileUpload
                  setFileUrl={setIconUrl}
                  inputLabel="Choose An Icon:"
                  remove={true}
                />
              )}
              {linkImage && (
                <FileUpload
                  setFileUrl={setLinkImage}
                  inputLabel="Choose An Image:"
                  remove={true}
                />
              )}
              {linkDescription && (
                <>
                  <label
                    for="formFile"
                    className={`form-label inline-block mt-2 text-black text-lg`}
                  >
                    Choose A Description:
                  </label>
                  <input
                    type="text"
                    name="n"
                    value={linkDescriptionText}
                    placeholder="This is Link  Description"
                    onChange={(e) => {
                      setLinkDescriptionText(e.target.value);
                    }}
                    className="form-control my-3"
                    id="urlCol"
                    aria-describedby="emailHelp"
                  />
                </>
              )}

              <button onClick={addLink} className="btn btn-light px-4 py-2">
                Add Link
              </button>
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
            {links &&
              links.map((url, i) => {
                return (
                  <>
                    <div key={i} className="linktreeurl-description shadow-sm">
                      <div className="flex align-center">
                        <span className="font-bold text-[14px]">
                          <a href={url.link}>{url.title}</a>
                          <button
                            className="delete-button p-1 ml-3"
                            onClick={() => {
                              deleteLink(i);
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
                      <div className="flex align-center">
                        <span className="text-[14px]"></span>
                        <span className="text-[14px]">{link.description}</span>
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
            original: links,
            name: ownerName,
            description: linkDescriptionText,
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
