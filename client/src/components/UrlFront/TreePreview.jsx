import React from "react";

const Light = ({ data }) => {
  return (
    <div className="p-3 bg-white h-full">
      <br />
      <br />
      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col text-black my-3">
        <div className="max-w-96 mx-auto my-3">{data?.name}</div>
        <div className="text-center p-2 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button className="links bg-black text-white" id={i}>
            {p.title}
          </button>
        );
      })}
    </div>
  );
};
const LightGray = ({ data }) => {
  return (
    <div className="p-3 bg-[#ebeef1] h-full">
      <br />
      <br />
      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col text-black my-3">
        <div className="max-w-96 mx-auto my-3">{data?.name}</div>
        <div className="text-center p-2 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button className="links bg-white text-black" id={i}>
            {p.title}
          </button>
        );
      })}
    </div>
  );
};
const AirBlack = ({ data }) => {
  return (
    <div className="p-3 bg-black h-full">
      <br />
      <br />
      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col text-white my-3">
        <div className=" max-w-96 mx-auto my-3">{data?.name}</div>
        <div className="text-center p-2 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button
            className="links bg-[#222222] border-[#222222] text-white hover:border-white transition-all"
            id={i}
          >
            {p.title}
          </button>
        );
      })}
    </div>
  );
};

const LightBlue = ({ data }) => {
  return (
    <div className="">
      <br />
      <br />
      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col my-3">
        <div className="max-w-96 mx-auto my-3">{data?.name}</div>
        <div className="text-center bg-gray-50 p-2 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button
            className="links bg-blue-700 text-white hover:bg-blue-500"
            id={i}
          >
            {p.title}
          </button>
        );
      })}
    </div>
  );
};

const LightGreen = ({ data }) => {
  return (
    <div className="">
      <br />
      <br />
      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col my-3">
        <div className="max-w-96 mx-auto my-3">{data?.name}</div>
        <div className="text-center bg-gray-50 p-2 max-w-[32rem] mx-auto">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button
            className="links bg-green-700 text-white hover:bg-green-500"
            id={i}
          >
            {p.title}
          </button>
        );
      })}
    </div>
  );
};

const DarkGrey = ({ data }) => {
  return (
    <div className="bg-gray-700 h-full">
      <br />
      <br />
      <img alt="pfp" src={data?.image} className="profile-picture" />

      <div className="flex flex-col text-white my-3">
        <div className="max-w-96 mx-auto my-3">{data?.name}</div>
        <div className="p-2 max-w-[32rem] mx-auto text-center">
          {data?.description}
        </div>
      </div>

      {data?.original?.map((p, i) => {
        return (
          <button className="links bg-white text-black" id={i}>
            {p.title}
          </button>
        );
      })}
    </div>
  );
};

const TreePreview = ({ i = 0, data }) => {
  return (
    <>
      {i === 0 && <AirBlack data={data} />}
      {i === 1 && <Light data={data} />}
      {i === 2 && <LightGreen data={data} />}
      {i === 3 && <LightBlue data={data} />}
      {i === 4 && <DarkGrey data={data} />}
      {i === 5 && <LightGray data={data} />}
    </>
  );
};

export default TreePreview;
