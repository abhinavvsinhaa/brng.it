import React from "react";
import { useState } from "react";
import "./UrlFront.css";
import axios from "axios";
import SingleUrl from "../SingleUrl/SingleUrl";
import SingleTreeUrl from "../SingleTreeUrl/SingleTreeUrl";

export default function UrlFront() {
  const [mainUrl, setMainUrl] = useState("");
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");

  
  const [ColMainUserName, setColMainUserName] = useState('')
  const [colMainUrlArr, setColMainUrlArr] = useState([]);
  const varJson = {};

  const [urlArr, setUrlArr] = useState([]);
  const [colMainUrl, setColMainUrl] = useState([]);

  const [colUrlArr, setColUrlArr] = useState([]);
  const [treeUrlArr, setTreeUrlArr] = useState([]);

  const [alert, setAlert] = useState(false)

  const convertMainUrl = async () => {
    try {
      const res = await axios.post("http://localhost:8000/v1/url/shorten", {
        original: mainUrl,
      });
      console.log(res);
      varJson.shortUrl = res.data.data.short;
      varJson.uid = res.data.data.uid;
      setUrlArr((urlArr) => [...urlArr, varJson]);
      setMainUrl('')
    } catch (err) {
      console.log(err);
    }
  };

  const stopAlertFunc = () =>{
    const myTimeout = setTimeout(stopAlert, 5000);

    function stopAlert() {
      setAlert(false)
    }
  }

  const addMainUrl = () => {
    setColMainUrlArr((colMainUrlArr) => [...colMainUrlArr, {link,title:linkName}]);
    setAlert(true);
    stopAlertFunc();
    setLink('');
    setLinkName('')
    setColMainUrl('')
  };
  const convertColUrl = async () => {
    const res = await axios.post(
      "http://localhost:8000/v1/url/shortenmultiple",
      { original: colMainUrlArr }
    );
    setColUrlArr(res.data.data);
    setColMainUrlArr([]);
  };

  const convertLinkUrl = async () => {
    const res = await axios.post("http://localhost:8000/v1/tree/combine", {
      original: colMainUrlArr,
      name: ColMainUserName
    });
    setTreeUrlArr((treeUrlArr) => [...treeUrlArr, res.data.data]);
    setColMainUrlArr([]);
  };

  return (
    <>

    {
      alert  &&   <div className="alertAdded" >
        <div class="alert alert-success" role="alert">
          Url Added
        </div>
      </div>
    }
    <div className="urlContainer">

      <div className="urlHead">URL Modifier</div>
      <label for="url" class="form-label ">Single Url</label>

      <div >
          <input type="email" class="form-control textBox" id="url" name="mainUrl" onChange={(e) => { setMainUrl(e.target.value) }} aria-describedby="emailHelp" placeholder="Add Url"/>
          <button onClick={convertMainUrl} type="submit" class="btn btn-primary mx-3 mt-0">Submit</button>
      </div>

      
      <br />
      {urlArr &&
        urlArr.map((p, i) => {
          return <SingleUrl id={i} varArr={p} />;
        })}

        <hr></hr>

      {/* <input
        name="colMainUrl"
        onChange={(e) => {
          setColMainUrl(e.target.value);
        }}
      /> */}

      <label for="urlCol" class="form-label">Collection Url</label>
      

      <div >
          <input type="email" name="colMainUrl" class="form-control textBox" placeholder="Add Collection" onChange={(e) => {setColMainUrl(e.target.value);}} id="urlCol" aria-describedby="emailHelp"/>
          <button onClick={convertColUrl} class="btn btn-primary mx-3">Create</button>
          <button onClick={addMainUrl} class="btn btn-warning mx-3">Add</button>
        </div>


      <br />
      {colUrlArr &&
        colUrlArr.map((p, i) => {
          return <SingleUrl id={i} varArr={p} />;
        })}

      <hr></hr>

      {/* <div>LinkTree Url's</div>
      <input
        name="colMainUrl"
        onChange={(e) => {
          setColMainUrl(e.target.value);
        }}
      /> */}

        <div class="form-label">LinkTree Url</div>
        <input type="email" name="colMainUrl" placeholder="Enter Name " onChange={(e) => { setColMainUserName(e.target.value);}}  class="form-control uerNameInput mb-2" id="urlCol" aria-describedby="emailHelp" /> 

        <div >
        <input type="email" name="colMainUrl" placeholder="Enter Title " onChange={(e) => { setLinkName(e.target.value);}}  class="form-control textBoxName mb-2 mx-1" id="urlCol" aria-describedby="emailHelp" /> 
          <input type="email" name="colMainUrl" placeholder="Make a Tree" onChange={(e) => { setLink(e.target.value);}}  class="form-control textBox" id="urlCol" aria-describedby="emailHelp"/>
          <button onClick={addMainUrl} class="btn btn-warning  mx-3">Add</button>
          <button onClick={convertLinkUrl} class="btn btn-primary mx-3 ">Create</button>
        </div>
{/* 
      <button onClick={addMainUrl}>Add</button>
      <button onClick={convertLinkUrl}>Create</button> */}

      

      <br />
      {treeUrlArr &&
        treeUrlArr.map((p, i) => {
          return <SingleTreeUrl id={i} treeArr={p} />;
        })}
    </div>
    </>
  );
}
