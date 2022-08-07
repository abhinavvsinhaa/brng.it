import React from "react";

const TreePreview = ({ data }) => {
  return (
    <div className="bodyBackground">
      <div className="myvideo"></div>

      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col">
        <div className="profile-name max-w-96 mx-auto">{data?.name}</div>
        <div className="profile-name bg-gray-50 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button className="links hover:bg-white hover:text-black" id={i}>
            {p.title}
          </button>
        );
      })}
    </div>
  );
};

export default TreePreview;
