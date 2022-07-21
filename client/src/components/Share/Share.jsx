import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import "./Share.css";

const Share = () => {
  const [customers, setCustomers] = useState([]);
  const [caption, setCaption] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [file, setFile] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setCaption((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

// fetch all customers

  const fetchCustomers = async () => {};

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  useEffect(() => {
  }, []);

  return (
    <div className="container share-container">
      <br />
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 col">
          <p
            style={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Share Post
          </p>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            To share a post you see on your Feed, click or tap on Share button
            to share now or you can also schedule the post on a further time.
          </p>
          <br />
          <button className="btn btn-share-post">Choose Account</button>
          <br /><br />
          <div className="share-post-inner-div ">
            <form action="" className="shadow-sm py-2 px-2 rounded">
              <textarea
                name=""
                id=""
                rows="8"
                className="caption-input text-14px"
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <div className="flex align-items-center">
                <p
                    onClick={() => setShowPicker((val) => !val)}
                    style={{ cursor: "pointer" }}
                >
                    😃
                </p>
                {showPicker && (
                    <Picker
                    pickerStyle={{ width: "100%", marginTop: "10px" }}
                    onEmojiClick={onEmojiClick}
                    />
                )}
                &nbsp;&nbsp;
                <div>
                    <input type="file" name="image" id="image" accept="image/*" value={file} onChange={e => console.log(e.target.files[0])} className="custom-file-input"/>
                </div>
              </div>
            </form>
            <br />
            <div className="flex">
              <button className="btn btn-share-post">Share Now</button>
              <button className="btn mx-2 btn-share-post">Schedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
