import api from "../../api/axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TreeUrlRedirect.css";

export default function TreeUrlRedirect() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAllLinks = async () => {
      try {
        const res = await api.get("/tree/" + path);
        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllLinks();
  }, [path]);

  return data ? (
    <div
      className="h-screen"
      style={{
        backgroundColor: data.css.bg,
        paddingTop: data.css.pt,
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[500px] w-full">
        <img
          alt="pfp"
          src={data?.image}
          style={{
            display: "block",
            width: data.css.profile.width,
            height: data.css.profile.height,
            borderRadius: data.css.profile.borderRadius,
            border: `${data.css.profile.border} solid ${data.css.profile.borderColor}`,
          }}
          className="mx-auto object-cover"
        />
        <div className="flex flex-col text-white my-3">
          <div
            className="mx-auto my-3 font-semibold"
            style={{
              fontSize: data.css.title.size,
              color: data.css.title.color,
            }}
          >
            {data?.name}
          </div>
          <div
            className="px-4 max-w-[32rem] mx-auto text-center"
            style={{
              fontSize: data.css.bio.size,
              color: data.css.bio.color,
            }}
          >
            {data?.description}
          </div>
        </div>

        <div className="flex flex-col my-3 ">
          {data?.original?.map((p, i) => {
            return (
              <a
                href="/"
                className="w-[80%] p-[20px] mx-auto my-2 text-center"
                style={{
                  backgroundColor: data.css.link.bg,
                  fontSize: data.css.link.size,
                  color: data.css.link.color,
                  border: `${data.css.link.border} solid ${data.css.link.borderColor}`,
                  borderRadius: `${data.css.link.borderRadius}`,
                }}
                id={i}
              >
                {p.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <p>Success</p>
  );
}
