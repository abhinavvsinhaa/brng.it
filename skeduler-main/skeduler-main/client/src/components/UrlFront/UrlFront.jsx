import React from 'react'
import { useState } from 'react'
import './UrlFront.css'
import axios from 'axios'
import SingleUrl from '../SingleUrl/SingleUrl';
export default function UrlFront() {
  
    const [mainUrl,setMainUrl] = useState('');
    const [colMainUrl,setColMainUrl] = useState('');
    const [colMainUrlArr,setColMainUrlArr] = useState([]);
    const varJson = {};
    let varArray = [];

    const [urlArr,setUrlArr] = useState([])

    
    const convertMainUrl = async () =>{
        try{
        const res = await axios.post('http://localhost:3000/v1/url/shorten',{original:mainUrl})
        varJson.shortUrl=res.data.data.short;
        varJson.uid=res.data.data.uid;
        setUrlArr(urlArr => [...urlArr, varJson]);
    }catch(err){console.log(err)}
    }    

    const addMainUrl = () =>{
        setColMainUrlArr(colMainUrlArr => [...colMainUrlArr, colMainUrl]);

    }
    const convertColUrl = async () =>{
        const res = await axios.post('http://localhost:3000/v1/url/shortenmultiple',{original:colMainUrlArr})
        for (let index = 0; index < res.data.data.length; index++) {
            varArray.push(res.data.data[index].short)
            varArray.push(res.data.data[index].uid)
            setUrlArr(urlArr => [...urlArr, varArray]);
            console.log(varArray) 
            varArray=[]; 
        }
        setColMainUrlArr([])

        console.log(res);
    }
    const test = async () =>{
        console.log(urlArr)
        console.log(colMainUrlArr)
    }

    return (
    <>
        <div>one url</div>
        <input name="mainUrl" onChange={(e)=>{setMainUrl(e.target.value)}} />
        <button onClick={convertMainUrl}>change</button>
        <br/>
        
        <div>collection url</div>
        <input name="colMainUrl" onChange={(e)=>{setColMainUrl(e.target.value)}} />
        <button onClick={addMainUrl}>Add</button>
        <button onClick={convertColUrl}>Create</button>
        <button onClick={test}>show</button>

        <br/>

        { 
            urlArr &&  urlArr.map((p,i)=>{
                return <SingleUrl id={i} varArr={p}/>
        })  
        
        }



    </>    
)}
