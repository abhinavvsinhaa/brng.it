import React, { useRef } from "react";
import { useState } from "react";
import "./urlFront.css";
import SingleUrl from "../SingleUrl/SingleUrl";
import { axiosPrivate } from "../../api/axios";

export default function UrlFront() {
  const [mainUrl, setMainUrl] = useState("");
  const [mainName, setMainName] = useState("");
  const varJson = {};

  const [singleUrl, setSingleUrl] = useState({});

  const general = useRef(null);
  const custom = useRef(null);

  const convertCustomUrl = async () => {
    if (mainName.length < 7 || isNaN(mainName.split("-")[1])) {
      alert("Must have digits at the end and len greater than 7 characters");
      return;
    }
    try {
      const res = await axiosPrivate.post("/url/shorten", {
        original: mainUrl,
        name: mainName,
      });
      varJson.shortUrl = res.data.data.short;
      varJson.uid = res.data.data.uid;
      setSingleUrl(varJson);
      setMainUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  const convertMainUrl = async () => {
    try {
      const res = await axiosPrivate.post("/url/shorten", {
        original: mainUrl,
      });
      console.log(res);
      varJson.shortUrl = res.data.data.short;
      varJson.uid = res.data.data.uid;
      // setUrlArr((urlArr) => [...urlArr, varJson]);
      setSingleUrl(varJson);
      setMainUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container url-container">
        <div ref={general} className="row justify-content-center">
          {/*URL shortener */}
          <div className="w-4/5 mt-10 url-container-inner">
            <div className="urlContainer">
              <br />
              <div className="flex">
                <div className="urlHead">URL Shortener</div>
                <button
                  onClick={() => {
                    document
                      .getElementsByClassName("url-container-inner-custom")[0]
                      .classList.remove("hidden");
                    document
                      .getElementsByClassName("url-container-inner")[0]
                      .classList.add("hidden");
                  }}
                  type="submit"
                  class="px-6 ml-2 m-2   text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Custom
                </button>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                Free URL shortener to create perfect URLs for your business. Use
                our tool to shorten links and then share them, in addition you
                can monitor traffic statistics.
              </p>
              <br />

              <label for="url" class="form-label text-14px">
                Single URL
              </label>
              <div></div>

              <div style={{ display: "flex" }}>
                <input
                  class="form-control textBox"
                  id="url"
                  name="mainUrl"
                  onChange={(e) => {
                    setMainUrl(e.target.value);
                  }}
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
              {/* {urlArr &&
                urlArr.map((p, i) => {
                  return (
                    <>
                      <span style={{ fontWeight: 500 }}>Shortened URL: </span>
                      <SingleUrl id={i} varArr={p} />
                      <br />
                    </>
                  );
                })} */}
              <span style={{ fontWeight: 500 }}>Shortened URL: </span>
              <SingleUrl varArr={singleUrl} />
            </div>
          </div>
          {/*Custom Url */}
          <div ref={custom} className="w-4/5 url-container-inner-custom hidden">
            <div className="urlContainer">
              <br />
              <div className="flex">
                <div className="urlHead">Custom Shortener </div>
                <button
                  onClick={() => {
                    document
                      .getElementsByClassName("url-container-inner-custom")[0]
                      .classList.add("hidden");
                    document
                      .getElementsByClassName("url-container-inner")[0]
                      .classList.remove("hidden");
                  }}
                  type="submit"
                  class="px-6 ml-2 m-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  General
                </button>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                Free URL shortener to create perfect URLs for your business. Use
                our tool to shorten links and then share them, in addition you
                can monitor traffic statistics.
              </p>
              <br />

              <label for="url" class="form-label text-14px m-1">
                Single URL
              </label>

              <div className="flex">
                <input
                  class="form-control textBox my-4 flex-2 "
                  id="url"
                  name="mainUrl"
                  onChange={(e) => {
                    setMainUrl(e.target.value);
                  }}
                  placeholder="https://www.facebook.com/john"
                />
                <input
                  class="form-control textBox m-4"
                  id="urlName"
                  onChange={(e) => {
                    setMainName(e.target.value);
                  }}
                  placeholder="custom-3846"
                />
                <button
                  onClick={convertCustomUrl}
                  type="submit"
                  class="btn url-success-btn m-4"
                >
                  Generate
                </button>
              </div>
              <br />
              <span style={{ fontWeight: 500 }}>Shortened URL: </span>
              <SingleUrl varArr={singleUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
