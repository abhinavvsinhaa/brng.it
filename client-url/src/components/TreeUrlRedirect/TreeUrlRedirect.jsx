import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function TreeUrlRedirect() {
    
    const location = useLocation();
    const path = location.pathname.split('/')[2];

    const [urlArr,setUrlArr] = useState([])

    useEffect(() => {
    
        const fetchAllLinks = async () =>{
            try{
            const res = await axios.get('http://localhost:3000/v1/tree/'+path);
            setUrlArr(res.data.data.original)
            }
            catch(err){console.log(err)}
        }

      
        fetchAllLinks()

    }, [path])
    

  return (
    <div>

        { 
            urlArr &&  urlArr.map((p,i)=>{
                    return <div id={i} >{p}</div>
            })  
            
            
        }

    </div>
  )
}
