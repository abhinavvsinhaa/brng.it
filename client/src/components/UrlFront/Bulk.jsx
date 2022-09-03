import React, { useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

import Papa from "papaparse";
import { saveAs } from "file-saver";
import { axiosPrivate } from "../../api/axios";

const allowedExtensions = ["csv"];

const App = () => {
  const [data, setData] = useState([]);
  const [shortData, setShortData] = useState([]);

  const [error, setError] = useState("");

  const [config, setConfig] = useState({});

  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setError("");

    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      setFile(inputFile);
    }
  };
  const handleParse = () => {
    if (!file) return setError("Enter a valid file");

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      setConfig(csv.meta);
      setData(parsedData);
    };
    reader.readAsText(file);
    setShortData([]);
  };

  const handleSubmit = async () => {
    let original = data.filter((element) => {
      return element.link;
    });
    original = original.map((element) => {
      return element.link;
    });
    try {
      const res = await axiosPrivate.post("/url/shortenmultiple", {
        original,
      });
      setShortData(res?.data?.data);
    } catch (err) {
      alert("Error");
    }
  };

  const handleDownload = async () => {
    if (shortData.length === 0) {
      alert("Please convert!");
      return;
    }
    const data = shortData.map((link) => {
      return { original: link.original, short: link.short };
    });
    const dataString = Papa.unparse(data, config);
    const blob = new Blob([dataString], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "short.csv");
  };

  return (
    <div>
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label
            for="formFile"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Choose A CSV File :
          </label>
          <input
            onChange={handleFileChange}
            className="form-control block w-full px-2 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
      </div>
      <div className="w-fit mx-auto">
        <button
          className="text-center text-white font-bold rounded py-2 m-2 w-[80px] focus:outline-none bg-blue-700 border-2 border-indigo-400"
          onClick={handleParse}
        >
          Upload
        </button>
        <button
          className="text-center text-white font-bold rounded py-2 m-2 w-[80px] focus:outline-none bg-blue-700 border-2 border-indigo-400"
          onClick={handleSubmit}
        >
          Covert
        </button>
        <button
          className="text-center text-white font-bold rounded py-2 m-2 w-[80px] focus:outline-none bg-blue-700 border-2 border-indigo-400"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
      <div className="flex flex-row justify-center">
        {shortData.length >= 1 ? (
          <div className="m-3 h-[500px] border-2 w-full max-w-[800px] overflow-auto">
            <p className="text-center font-bold p-1">SHORT LINKS </p>
            {shortData.map((element, idx) => (
              <div className="p-1" key={idx}>
                {idx}. {element.short}
              </div>
            ))}
          </div>
        ) : data.length > 1 ? (
          <div className="m-3 h-[500px] border-2 w-full max-w-[800px] overflow-auto">
            <p className="text-center font-bold p-1">LINKS </p>
            {error
              ? error
              : data.map((element, idx) => (
                  <div className="p-1" key={idx}>
                    {element.index}. {element.link}
                  </div>
                ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
