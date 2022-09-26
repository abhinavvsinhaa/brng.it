import { Clipboard } from "@styled-icons/feather";
import { message } from "antd";
import React, { useEffect } from "react";
import VariousTemplates from '../templates/index'
import CreateAndServeHTML from "../utils/createHTML";
function Display ({variableInput,selectedTemplate,setisLoading,design, setDesign,extraFields}) {
    useEffect(()=>{
        var value = "";
        for(var i=0 ; i<extraFields.length;i++){
            value+=extraFields[i];
        }
        document.getElementById('extra-field-div').innerHTML = value;
    },[extraFields])
    return(
        <div className="w-[695px]">
            <div style={{marginTop: "50px",height: "fit-content",backgroundColor: "white",borderRadius : "10px"}} className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden">
                <div className="relative h-[30px] w-full bg-gray-300">
                    <div className="absolute left-0 top-0 w-fit grid grid-flow-col gap-[8px] place-content-center h-full pl-[10px]">
                        <div className="w-[15px] h-[15px] bg-gray-100 rounded-full"></div>
                        <div className="w-[15px] h-[15px] bg-gray-100 rounded-full"></div>
                        <div className="w-[15px] h-[15px] bg-gray-100 rounded-full"></div>
                    </div>
                </div>
                <div className="grid gap-[15px] text-[#8f8f8f] text-[12px]">                    
                <div className="p-[30px]">
                    <p className="py-[6px]">To : <span className="font-[700] p-[3px_10px] rounded-[20px] border border-[#d9dce5] leading-[18px]">Tracy McLaugin</span></p>
                    <hr />
                    <p className="py-[6px]">Subject :&nbsp; <span className="font-[700]">Check out my new email signature</span></p>
                    <hr />
                </div>
                <div id="main-editor">
                <VariousTemplates design={design} setDesign={setDesign} selectedTemplate={selectedTemplate} variableInput={variableInput}/>
                <div id="extra-field-div" style={{'margin-left': '30px','margin-right':'10px'}}></div>
                </div>
                </div>
            </div>
            <div className="grid grid-flow-col pt-[15px]">
            <button onClick={() => {CreateAndServeHTML(document.getElementById('main-editor').innerHTML,setisLoading)}} className="w-fit bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download HTML</span>
</button>
                <div className="grid justify-items-end">
                <button onClick={()=> {
                    navigator.clipboard.writeText
                    (document.getElementById('main-editor').innerHTML);
                    message.success({content:"Great Choice! Copied content to clipboard",style:{bottom:'10px'}})
                }} className="w-fit inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out self-end"> <Clipboard className="w-[25px] pr-[5px]"/> Copy to clipboard</button>
                </div>
            </div>
        </div>
    )
};

export default Display;