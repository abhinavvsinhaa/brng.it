import React from 'react'
import { useState } from 'react'
import './UrlFront.css'
import axios from 'axios'
import SingleUrl from '../SingleUrl/SingleUrl';
import SingleTreeUrl from '../SingleTreeUrl/SingleTreeUrl';
export default function UrlFront() {
  
    const [mainUrl,setMainUrl] = useState('');
    const [colMainUrl,setColMainUrl] = useState('');
    const [colMainUrlArr,setColMainUrlArr] = useState([]);
    const varJson = {};

    const [urlArr,setUrlArr] = useState([])
    const [colUrlArr,setColUrlArr] = useState([])
    const [treeUrlArr,setTreeUrlArr] = useState([])
    


    
    const convertMainUrl = async () =>{
        try{
        const res = await axios.post('http://localhost:3000/v1/url/shorten',{original:mainUrl})
        varJson.shortUrl=res.data.data.short;
        varJson.uid=res.data.data.uid;
        setUrlArr(urlArr => [...urlArr, varJson]);
        console.log(urlArr)
    }catch(err){console.log(err)}
    }    

    const addMainUrl = () =>{
        setColMainUrlArr(colMainUrlArr => [...colMainUrlArr, colMainUrl]);

    }
    const convertColUrl = async () =>{
        const res = await axios.post('http://localhost:3000/v1/url/shortenmultiple',{original:colMainUrlArr})
        setColUrlArr(res.data.data)
        setColMainUrlArr([])
    }

    const convertLinkUrl = async () =>{
        const res = await axios.post('http://localhost:3000/v1/tree/combine',{original:colMainUrlArr})
        setTreeUrlArr(treeUrlArr => [...treeUrlArr, res.data.data]);
        setColMainUrlArr([])
    }
    


    return (
    <>
        <div>one url</div>
        <input name="mainUrl" onChange={(e)=>{setMainUrl(e.target.value)}} />
        <button onClick={convertMainUrl}>change</button>
        <br/>
        { 
            urlArr &&  urlArr.map((p,i)=>{
                return <SingleUrl id={i} varArr={p}/>
        })  
        
        }
        
        <div>collection url</div>
        <input name="colMainUrl" onChange={(e)=>{setColMainUrl(e.target.value)}} />
        <button onClick={addMainUrl}>Add</button>
        <button onClick={convertColUrl}>Create</button>

        <br/>
        { 
            colUrlArr &&  colUrlArr.map((p,i)=>{
                return <SingleUrl id={i} varArr={p}/>
        })  
        
        }



        <div>LinkTree Url's</div>
        <input name="colMainUrl" onChange={(e)=>{setColMainUrl(e.target.value)}} />
        <button onClick={addMainUrl}>Add</button>
        <button onClick={convertLinkUrl}>Create</button>
        <br/>
        { 
            treeUrlArr &&  treeUrlArr.map((p,i)=>{
                return <SingleTreeUrl id={i} treeArr={p}/>
        })  
        
        }



    </>    
)}
