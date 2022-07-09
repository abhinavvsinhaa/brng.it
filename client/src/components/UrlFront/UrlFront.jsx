import React from "react";
import { useState } from "react";
import "./UrlFront.css";
import axios from "axios";
import SingleUrl from "../SingleUrl/SingleUrl";
import SingleTreeUrl from "../SingleTreeUrl/SingleTreeUrl";

export default function UrlFront() {
  const [mainUrl, setMainUrl] = useState("");
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");

  const [ColMainUserName, setColMainUserName] = useState("");
  const [colMainUrlArr, setColMainUrlArr] = useState([]);
  const varJson = {};

  const [urlArr, setUrlArr] = useState([]);
  const [colMainUrl, setColMainUrl] = useState([]);

  const [colUrlArr, setColUrlArr] = useState([]);
  const [treeUrlArr, setTreeUrlArr] = useState([]);

  const [alert, setAlert] = useState(false);

  const convertMainUrl = async () => {
    try {
      const res = await axios.post("http://localhost:8000/v1/url/shorten", {
        original: mainUrl,
      });
      console.log(res);
      varJson.shortUrl = res.data.data.short;
      varJson.uid = res.data.data.uid;
      setUrlArr((urlArr) => [...urlArr, varJson]);
      setMainUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  const stopAlertFunc = () => {
    const myTimeout = setTimeout(stopAlert, 5000);

    function stopAlert() {
      setAlert(false);
    }
  };

  const addMainUrl = () => {
    setColMainUrlArr((colMainUrlArr) => [
      ...colMainUrlArr,
      { link, title: linkName },
    ]);
    setAlert(true);
    stopAlertFunc();
    setLink("");
    setLinkName("");
    setColMainUrl("");
  };
  const convertColUrl = async () => {
    const res = await axios.post(
      "http://localhost:8000/v1/url/shortenmultiple",
      { original: colMainUrlArr }
    );
    setColUrlArr(res.data.data);
    setColMainUrlArr([]);
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
    <div className="container url-container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          {alert && (
            <div className="alertAdded">
              <div class="alert alert-success" role="alert">
                Url Added
              </div>
            </div>
          )}
          <div className="urlContainer">
            <br />
            <div className="urlHead">URL Shortener</div>
            <p
              style={{
                fontSize: "14px",
                opacity: 0.8,
              }}
            >
              Free URL shortener to create perfect URLs for your business. Use
              our tool to shorten links and then share them, in addition you can
              monitor traffic statistics.
            </p>
            <br />

            <label for="url" class="form-label text-14px">
              Single URL
            </label>

            <div style={{ display: 'flex'}}>
              <input
                type="email"
                class="form-control textBox"
                id="url"
                name="mainUrl"
                onChange={(e) => {
                  setMainUrl(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="https://www.facebook.com/john"
              />
              <button
                onClick={convertMainUrl}
                type="submit"
                class="btn url-success-btn mx-2 mt-0"
              >
                Generate
              </button>
            </div>

            <br />
            {urlArr &&
              urlArr.map((p, i) => {
                return (
                <>
                  <SingleUrl id={i} varArr={p} />
                  <br />
                </>
                )
            })}

            <hr />

            {/* <input
              name="colMainUrl"
              onChange={(e) => {
                setColMainUrl(e.target.value);
              }}
            /> */}

            {/* <br />
            <label for="urlCol" class="form-label text-14px">
              Multiple URLs
            </label>

            <div className="flex">
              <input
                type="email"
                name="colMainUrl"
                class="form-control textBox"
                placeholder="https://www.facebook.com/john"
                onChange={(e) => {
                  setColMainUrl(e.target.value);
                }}
                id="urlCol"
                aria-describedby="emailHelp"
              />
              <button onClick={addMainUrl} class="btn url-submit-btn mx-2">
                Add
              </button>
              <button onClick={convertColUrl} class="btn btn-success">
                Create
              </button>
            </div>

            <br />
            {colUrlArr &&
              colUrlArr.map((p, i) => {
                return <SingleUrl id={i} varArr={p} />;
              })} */}

            {/* <hr></hr> */}

            {/* <div>LinkTree Url's</div>
            <input
              name="colMainUrl"
              onChange={(e) => {
                setColMainUrl(e.target.value);
              }}
            /> */}
            
            <br />
            <div class="form-label urlHead">Linktree</div>
            <p className="text-14px" style={{opacity: 0.8}}>Linktree allows you to create a personalized and customizable page that houses all the important links that you want to share with your audience.</p>
            <br />
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
              <br />
              <button onClick={addMainUrl} class="btn url-submit-btn">
                Add Link
              </button>
              <button onClick={convertLinkUrl} class="btn url-success-btn mx-2">
                Generate
              </button>
            </div>
            {/* 
              <button onClick={addMainUrl}>Add</button>
              <button onClick={convertLinkUrl}>Create</button> 
            */}

            <br />
            {treeUrlArr &&
              treeUrlArr.map((p, i) => {
                return <SingleTreeUrl id={i} treeArr={p} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
