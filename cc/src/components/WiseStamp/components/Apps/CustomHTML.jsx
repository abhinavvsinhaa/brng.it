import { useState } from "react"
import googleplay from '../../../../assets/icons/google-play-badge.png';
import appstore from '../../../../assets/icons/app-store-badge.png';
import { Droplet } from "@styled-icons/boxicons-solid";
import { AlignCenter, AlignLeft, AlignRight } from "@styled-icons/feather";
import { Zoom } from "@styled-icons/boxicons-logos";
export default function CustomHTML({extraFields,onClose}){
    const [buttonSize,setbuttonSize] = useState(1)
    const [fontColor,setfontColor] = useState('#000')
    const [fontSize,setfontSize] = useState('10')
    const [alignment,setalignment] = useState('l')
    const [customHTML,setcustomHTML] = useState('')
    const [zoomLink,setzoomLink] = useState('')
    const htmlEditHandler = (t) => {
        setcustomHTML(t);
        document.getElementById('html-textarea').innerHTML = t;
    }
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[auto_1fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Use custom HTML</div>
                </div>
                <div className="grid grid-rows-[50px_200px] gap-[10px] pt-[10px]">
                    <div className="font-bold text-[20px] pl-[10px]">Enter your custom HTML</div>
                    <div className="grid gap-[10px]">
                        <div className="grid">
                            <div className="grid">
                                <textarea value={customHTML} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px] resize-none" placeholder="Enter your HTML code here" onChange={(e)=>{htmlEditHandler(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-fit min-h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div id="custom-button">
                            <div className="w-fit h-fit" style={{margin:'10px'}} id="html-textarea">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=>{
                    extraFields(document.getElementById('custom-button').innerHTML); onClose();
                }} className="w-[100px] h-[50px] bottom-[20px] grid cursor-pointer place-self-end hover:bg-blue-600 rounded-md place-content-center text-lg bg-blue-500 text-white">
                        Add
                </div>
            </div>
        </div>
    )
}