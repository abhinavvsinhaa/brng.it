import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './TreeUrlRedirect.css'

export default function TreeUrlRedirect() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [urlArr, setUrlArr] = useState([]);
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');



  useEffect(() => {
    const fetchAllLinks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/v1/tree/" + path);
        setUrlArr(res.data.data.original);
        setUserImage(res.data.data.image);
        setUserName(res.data.data.name)

      } catch (err) {
        console.log(err);
      }
    };

    fetchAllLinks();
  }, [path]);

  return (
    <div className="bodyBackground">

<div class="myvideo">
  </div>
  
    <img alt='profilepic' src={userImage}  class="profile-picture"/>
    
    <div class="profile-name">{userName}</div>


      {urlArr &&
        urlArr.map((p, i) => {
          return <a href={p.link} class="links" id={i}>{p.title}</a>;
        })}
    </div>
  );
}
