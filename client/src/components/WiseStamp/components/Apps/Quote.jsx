import { Droplet } from "@styled-icons/boxicons-solid"
import { AlignCenter, AlignLeft, AlignRight } from "@styled-icons/feather"
import axios from "axios"
import { useEffect, useState } from "react"
import { ChromePicker } from "react-color"

export default function Quote({extraFields,onClose}){
    const [quoteType,setquoteType] = useState('success')
    const [quoteText, setquoteText] = useState('');
    const [fontColor,setfontColor] = useState('#fff')
    const [fontcolorDiv,setfontcolorDiv] = useState(false)
    const [alignment,setalignment] = useState('l')
    const [fontSize,setfontSize] = useState('10')
    // async function getQuote(){
    //     const response = await fetch("https://zenquotes.io/api/quotes/",{mode: 'no-cors'});
    //     var data = response.json();
    //     axios.get("https://zenquotes.io/api/quotes/",{})
    // }
    // useEffect((quoteType)=>{
    //     getQuote()
    // },[quoteType])
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_2fr_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Add a quote</div>
                </div>
                <div className="grid grid-rows-[30px_auto] gap-[10px]">
                    <div className="font-bold text-[20px] pl-[8px]">Choose your category</div>
                    <div className="grid grid-rows-[20px_20px_20px_20px_20px_20px] grid-cols-[1fr_1fr] gap-[10px]">
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="conf" id="conf"  readOnly checked={quoteType==='success'?true:false} onClick={()=>{setquoteType('success')}}/></div><div>Success</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="vir" id="vir"  readOnly checked={quoteType==='motivational'?true:false} onClick={()=>{setquoteType('motivational')}}/></div><div>Motivational</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="nbrand" id="nbrand"  readOnly checked={quoteType==='william'?true:false} onClick={()=>{setquoteType('william')}}/></div><div>William Shakespare</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="po" id="po"  readOnly checked={quoteType==='science'?true:false} onClick={()=>{setquoteType('science')}}/></div><div>Science</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="cr" id="cr"  readOnly checked={quoteType==='finance'?true:false} onClick={()=>{setquoteType('finance')}}/></div><div>Finance</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="custom" id="custom"  readOnly checked={quoteType==='random'?true:false} onClick={()=>{setquoteType('random')}}/></div><div>Random</div></div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px_50px_50px_50px] gap-[10px]">
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
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Font Size</div>
                        <div className="grid place-self-center w-[80%]">
                            <input type="range" name="size" id="size" onChange={(e)=>{setfontSize(e.target.value)}} value={fontSize} min='8' max='17' />
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Alignment</div>
                        <div className="grid grid-flow-col gap-[10px] w-fit">
                            <div className={`${alignment==='l'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setalignment('l')}}><AlignLeft width='40px'/></div>
                            <div className={`${alignment==='m'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setalignment('m')}}><AlignCenter width='40px'/></div>
                            <div className={`${alignment==='r'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setalignment('r')}}><AlignRight width='40px'/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="relative grid gap-[30px]">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div id="custom-button" className="px-[10px] py-[10px]">
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