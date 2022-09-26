import { useState } from "react"
import googleplay from '../../../../assets/icons/google-play-badge.png';
import appstore from '../../../../assets/icons/app-store-badge.png';
import { ChromePicker } from "react-color";
import { Droplet } from "@styled-icons/boxicons-solid";
import { AlignCenter, AlignLeft, AlignRight } from "@styled-icons/feather";
export default function PostJobOffer({extraFields,onClose}){
    const [buttonSize,setbuttonSize] = useState('14px')
    const [fontColor,setfontColor] = useState('#1BA2EB')
    const [fontSize,setfontSize] = useState('10')
    const [title,setTitle] = useState('We are looking for: ')
    const [playLink,setplayLink] = useState('https://')
    const [buttonText,setbuttonText] = useState('WE ARE HIRING')
    const [fontcolorDiv,setfontcolorDiv] = useState(false)

    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_auto_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Post a job offer</div>
                </div>
                <div className="grid grid-rows-[40px_auto] gap-[10px] pl-[10px]">
                    <div className="font-bold text-[18px]">Enter job description</div>
                    <div className="grid grid-rows-[50px_50px_50px] gap-[10px]">
                        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Introduction</div>
                            <div className="grid">
                                <input value={title} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" type='text' onChange={(e)=>{setTitle(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Link to position page</div>
                            <div className="grid">
                                <input value={playLink} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" type='text' onChange={(e)=>{setplayLink(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Button Text</div>
                            <div className="grid">
                                <select name="buttontext" id="buttontext" defaultValue={buttonText} onChange={(e)=>{setbuttonText(e.target.value)}}>
                                    <option value="Open positions">Open positions</option>
                                    <option value="Join our team">Join our team</option>
                                    <option value="WE ARE HIRING">WE ARE HIRING</option>
                                    <option value="Click to join">Click to join</option>
                                    <option value="TEAM PLAYER">TEAM PLAYER</option>
                                    <option value="">None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px_50px] gap-[10px] pt-[30px]">
                    <div className="font-bold text-[20px] pl-[10px]">Style</div>
                <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Color</div>
                        <div className="grid grid-cols-[auto_1fr] w-fit place-self-center gap-[10px]">
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
                                <div onClick={() => {setfontColor('#000')}} className={`cursor-pointer ${fontColor==="#000"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-black`}></div>
                                <div onClick={() => {setfontColor('#9158BD')}} className={`cursor-pointer ${fontColor==="#9158BD"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#9158BD]`}></div>
                                <div onClick={() => {setfontColor('#DE627B')}} className={`cursor-pointer ${fontColor==="#DE627B"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#DE627B]`}></div>
                                <div onClick={() => {setfontColor('#1BA2EB')}} className={`cursor-pointer ${fontColor==="#1BA2EB"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#1BA2EB]`}></div>
                                <div onClick={() => {setfontColor('#53B700')}} className={`cursor-pointer ${fontColor==="#53B700"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#53B700]`}></div>
                                <div onClick={() => {setfontColor('#EEBE36')}} className={`cursor-pointer ${fontColor==="#EEBE36"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#EEBE36]`}></div>
                                <div onClick={() => {setfontColor('#FF6009')}} className={`cursor-pointer ${fontColor==="#FF6009"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#FF6009]`}></div>
                                <div onClick={() => {setfontColor('#B92424')}} className={`cursor-pointer ${fontColor==="#B92424"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#B92424]`}></div>
                            </div>
                            <div className="relative grid place-content-center">
                                <div onClick={() => {setfontcolorDiv(!fontcolorDiv)}} className="p-[1px] w-[30px] h-[30px] grid place-content-center rounded-full border-[1.5px] cursor-pointer border-black">
                                    <Droplet width='20px'/>
                                </div>
                                <div className="absolute top-full -left-[90%]">
                                    {fontcolorDiv?
                                    (<ChromePicker color={fontColor} onChangeComplete={(color) => {setfontColor(color.hex)}}/>)
                                    :
                                    ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Size</div>
                        <div className="grid justify-self-start grid-cols-[50px_50px_50px] gap-[5px]">
                            <button onClick={()=>{setbuttonSize('10px')}} className={`${buttonSize==="10px"?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                S
                            </button>
                            <button onClick={()=>{setbuttonSize('14px')}} className={`${buttonSize==="14px"?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                M
                            </button>
                            <button onClick={()=>{setbuttonSize('18px')}} className={`${buttonSize==="18px"?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                L
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Font Size</div>
                        <div className="grid place-self-center w-[80%]">
                            <input type="range" name="size" id="size" onChange={(e)=>{setfontSize(e.target.value)}} value={fontSize} min='8' max='17' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div id="custom-button" className="pt-[10px]">
                            <a href={playLink} style={{marginLeft:'10px',marginBottom:'10px',background:fontColor,padding:'5px 10px',color:'white',borderRadius:'5px',fontWeight:'bold',fontSize:buttonSize}}>{buttonText}</a>
                            <a href={playLink} style={{marginLeft:'10px',marginBottom:'10px',paddingLeft:'5px',color:'black',fontSize:fontSize}}>{title}</a>
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