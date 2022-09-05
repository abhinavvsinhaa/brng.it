import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { Spin } from "antd";
import { storage } from "../util/Firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 } from "uuid";

/*
      USAGE:
        <FileUpload setFileUrl={setIconUrl}
                    inputLabel="Choose An Icon:"
                    remove={true} />
*/

function FileUpload({ setFileUrl, inputLabel, inputLabelColor, remove }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const id = v4();

  const handleClick = () => {
    if (!uploadedFile) {
      setError("Please provide a file!");
      return;
    }
    setLoading(true);
    setError("");
    const storageRef = ref(storage, `/image/${uploadedFile.name}-${id}`);

    uploadBytes(storageRef, uploadedFile)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot.ref.toString());
        getDownloadURL(ref(storage, `image/${uploadedFile.name}-${id}`))
          .then((url) => {
            setFileUrl(url);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleRemove = () => {
    setFileUrl("");
    document.getElementById("imageUpload").value = null;
  };

  return (
    <>
      <div className="flex items-end my-1">
        <div>
          <label
            for="formFile"
            className={`form-label inline-block mt-2 text-[${inputLabelColor}] text-lg`}
          >
            {inputLabel}
          </label>
          <input
            type="file"
            name="imageUpload"
            id="imageUpload"
            className="form-control block w-[300px] px-2 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => {
              setUploadedFile(e.target.files[0]);
            }}
          />
        </div>
        <button onClick={handleClick} className="btn btn-dark h-[38px] mx-3">
          UPLOAD{" "}
          {loading && (
            <>
              &nbsp; <Spin />
            </>
          )}
        </button>
        {remove && (
          <button onClick={handleRemove} className="p-2">
            <DeleteIcon />
          </button>
        )}
      </div>
      <p className="text-red-500 font-bold text-md">{error}</p>
    </>
  );
}

export default FileUpload;
