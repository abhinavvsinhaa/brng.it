import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button, Space, Table } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Modal = ({ analytics }) => {
  const [showModal, setShowModal] = useState(false);
  let count = 0;
  const mp = new Map();
  const locations = [];
  analytics.forEach((element, i) => {
    const browserName = element?.device?.client?.name;
    const type = element?.device?.device?.type;
    const os = element?.device?.os?.name;
    if (element?.location) locations.push(element?.location);
    if (browserName || type || os) {
      count++;
    }
    mp.set(type, mp.get(type) + 1 || 1);
    mp.set(browserName, mp.get(browserName) + 1 || 1);
    mp.set(os, mp.get(os) + 1 || 1);
  });

  const mpArr = [];
  for (var [key, value] of mp) {
    mpArr.push({ key, value });
  }
  console.log(locations);
  const myIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [20, 30],
    iconAnchor: [12, 41],
  });

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex gap-[5px] items-center align-middle justify-between p-4 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl self-baseline">Analytics </h3>
                  <span
                    onClick={() => setShowModal(false)}
                    className="text-3xl self-baseline cursor-pointer"
                  >
                    x
                  </span>
                </div>
                <div className="p-2">
                  <MapContainer
                    center={locations[0]}
                    zoom={6}
                    scrollWheelZoom={false}
                    style={{
                      height: "400px",
                      width: "500px",
                      backgroundColor: "red",
                    }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {locations.map((pos) => {
                      return (
                        <Marker position={pos} icon={myIcon}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                      );
                    })}
                  </MapContainer>

                  <p>Total Click: {count}</p>
                  {mpArr.map(({ key, value }) => {
                    if (!key) return <></>;
                    return (
                      <p>
                        {key} &nbsp;
                        {value}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

const AnalyticsTable = () => {
  const { auth } = useAuth();
  const data = auth.user.url;

  const columns = [
    {
      title: "ORIGINAL",
      dataIndex: "original",
      key: "original",
      ellipsis: true,
    },
    {
      title: "SHORT",
      dataIndex: "short",
      key: "short",
    },
    {
      title: "QR",
      key: "qr",
      render: (_, row) => (
        <a
          href={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${row.short}`}
          download
        >
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${row.short}`}
            alt="QR"
            className="p-3"
          ></img>
        </a>
      ),
    },
    {
      title: "Analytics",
      key: "analytics",
      render: (_, row) => <Modal analytics={row.analytics} />,
    },
  ];
  return (
    <>
      <Space
        style={{
          margin: 16,
        }}
      ></Space>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AnalyticsTable;
