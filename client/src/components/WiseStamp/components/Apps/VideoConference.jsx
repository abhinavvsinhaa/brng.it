import { useState } from "react"
import googleplay from '../../../../assets/icons/google-play-badge.png';
import appstore from '../../../../assets/icons/app-store-badge.png';
import { Droplet } from "@styled-icons/boxicons-solid";
import { AlignCenter, AlignLeft, AlignRight } from "@styled-icons/feather";
import { Zoom } from "@styled-icons/boxicons-logos";
export default function VideoConference(){
    const [buttonSize,setbuttonSize] = useState(1)
    const [fontColor,setfontColor] = useState('#000')
    const [fontSize,setfontSize] = useState('10')
    const [alignment,setalignment] = useState('l')
    const [zoomUrl,setzoomUrl] = useState('Meet me on Zoom')
    const [zoomLink,setzoomLink] = useState('')

    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_auto_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Download our app</div>
                </div>
                <div className="grid gap-[10px] pl-[10px]">
                    
                </div>
                <div className="grid grid-rows-[50px_50px_50px_50px] gap-[10px] pt-[30px]">
                    <div className="font-bold text-[20px] pl-[10px]">Add a zoom button</div>
                    <div className="grid grid-rows-[50px_50px_50px] gap-[10px]">
                        <div className="grid grid-cols-[200px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Button Text</div>
                            <div className="grid">
                                <input value={zoomUrl} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" type='text' onChange={(e)=>{setzoomUrl(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Personal Meeting Room Url</div>
                            <div className="grid">
                                <input value={zoomLink} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" placeholder="http://zoom.us/111-222-333" type='text' onChange={(e)=>{setzoomLink(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Size</div>
                        <div className="grid justify-self-start grid-cols-[50px_50px_50px] gap-[5px]">
                            <button onClick={()=>{setbuttonSize(0.75)}} className={`${buttonSize===0.75?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                S
                            </button>
                            <button onClick={()=>{setbuttonSize(1)}} className={`${buttonSize===1?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                M
                            </button>
                            <button onClick={()=>{setbuttonSize(1.5)}} className={`${buttonSize===1.5?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                L
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div className="pl-[10px] pt-[10px]">
                            <div className="w-fit h-fit bg-[#2D8CFF]">
                                <a href={zoomLink} className="grid grid-cols-[auto_1fr] gap-[7px] px-[10px] py-[6px]">
                                    <div className="grid p-[4px] h-fit place-self-center rounded-full bg-white">
                                        <Zoom width={buttonSize*24+'px'} className="text-[#2D8CFF]"/>
                                    </div>
                                    <div className={`grid place-content-center text-[${buttonSize*15+'px'}] text-white font-bold font-[Lato]`}>
                                        {zoomUrl}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}