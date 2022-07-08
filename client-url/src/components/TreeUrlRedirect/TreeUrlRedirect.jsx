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

  useEffect(() => {
    const fetchAllLinks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/v1/tree/" + path);
        setUrlArr(res.data.data.original);
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
  
    <img alt='profilepic' src="https://scontent.fl5"  class="profile-picture"/>
    
    <div class="profile-name">@edavila</div>


      {urlArr &&
        urlArr.map((p, i) => {
          return <a href={p} class="links" id={i}>{p}</a>;
        })}
    </div>
  );
}
