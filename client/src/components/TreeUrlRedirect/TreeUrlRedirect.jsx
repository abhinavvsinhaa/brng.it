import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TreeUrlRedirect.css";

export default function TreeUrlRedirect() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchAllLinks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/v1/tree/" + path);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllLinks();
  }, [path]);

  return (
    <div className="bodyBackground">
      <div className="myvideo"></div>

      <img alt="profilepic" src={data?.image} className="profile-picture" />

      <div className="flex flex-col">
        <div className="profile-name max-w-96 mx-auto">{data?.name}</div>
        <div className="profile-name bg-gray-50 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data &&
        data?.original?.map((p, i) => {
          return (
            <a href={p.link} className="links" id={i}>
              {p.title}
            </a>
          );
        })}
    </div>
  );
}
