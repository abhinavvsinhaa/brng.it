import React, { useState } from "react";
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
      console.log(res?.data?.data);
      setShortData(res?.data?.data);
    } catch (err) {
      alert("Error");
    }

    const dataString = Papa.unparse(shortData, config);
    const blob = new Blob([dataString], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "myfile.csv");
  };

  return (
    <div>
      <label htmlFor="csvInput" className="block">
        Enter CSV File
      </label>
      <input
        onChange={handleFileChange}
        id="csvInput"
        name="file"
        type="File"
      />
      <div>
        <button
          className="text-center text-indigo-400 font-bold rounded py-2 my-2 w-[80px] focus:outline-none bg-gray-900 border-2 border-indigo-400"
          onClick={handleParse}
        >
          Parse
        </button>
      </div>
      <div className="mt-3 h-[250px] w-full overflow-auto">
        <p>Links: </p>
        {error
          ? error
          : data.map((element, idx) => (
              <div className="p-1" key={idx}>
                {element.index}. {element.link}
              </div>
            ))}
      </div>
      <button
        className="text-center text-white font-bold rounded py-2 my-2 w-[80px] focus:outline-none bg-blue-700 border-2 border-indigo-400"
        onClick={handleSubmit}
      >
        Covert
      </button>
      <div className="mt-3 h-[250px] w-full overflow-auto">
        <p>Shortened Links: </p>
        {shortData.map((element, idx) => (
          <div className="p-1" key={idx}>
            {idx}. {element.short}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
