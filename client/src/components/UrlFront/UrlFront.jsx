import React from "react";
import { useState } from "react";
import "./UrlFront.css";
import axios from "axios";
import SingleUrl from "../SingleUrl/SingleUrl";
import SingleTreeUrl from "../SingleTreeUrl/SingleTreeUrl";
import ResponsiveDrawer from "../Navigation/ResponsiveDrawer";

export default function UrlFront() {
  const [mainUrl, setMainUrl] = useState("");
  const varJson = {};

  const [urlArr, setUrlArr] = useState([]);

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

  return (
    <>
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
                    <span style={{fontWeight: 500}}>Shortened URL: </span>
                    <SingleUrl id={i} varArr={p} />
                    <br />
                  </>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
