import { Droplet } from "@styled-icons/boxicons-solid"
import { useState } from "react"
import { ChromePicker } from "react-color"
import {AlignLeft,AlignCenter,AlignRight} from "@styled-icons/feather"
export default function Disclaimer({extraFields,onClose}){
    const [fontSize,setfontSize] = useState('10')
    const [fontColor,setfontColor] = useState('#808080')
    const [alignment,setAlignment] = useState('l')
    const [disclaimer,setDisclaimerIndex] = useState(0)
    const [fontcolorDiv,setfontcolorDiv] = useState(false)
    const disclaimerarr = ['IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof.',' Warning: Although taking reasonable precautions to ensure no viruses or malicious softwares are present in this email, the sender cannot accept responsibility for any loss or damage arising from the use of this email or attachments.',' No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party by email without specific confirmation. ',' All views and opinions expressed in this email message are the personal opinions of the author and do not represent those of the company. No liability can be held for any damages, however caused, to any recipients of this message. ',' If you received this email in error, please notify us immediately by sending an e-mail or by calling. ',''];
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_auto_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Add a disclaimer</div>
                </div>
                <div className="grid grid-rows-[30px_auto] gap-[10px]">
                    <div className="font-bold text-[20px] pl-[8px]">Choose your disclaimer type:</div>
                    <div className="grid grid-rows-[20px_20px_20px_20px_20px_20px] gap-[10px]">
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="conf" id="conf"  readOnly checked={disclaimer===0?true:false} onClick={()=>{setDisclaimerIndex(0)}}/></div><div>Confidelity</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="vir" id="vir"  readOnly checked={disclaimer===1?true:false} onClick={()=>{setDisclaimerIndex(1)}}/></div><div>No viruses</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="nbrand" id="nbrand"  readOnly checked={disclaimer===2?true:false} onClick={()=>{setDisclaimerIndex(2)}}/></div><div>Non-branding</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="po" id="po"  readOnly checked={disclaimer===3?true:false} onClick={()=>{setDisclaimerIndex(3)}}/></div><div>Personal Opinions</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="cr" id="cr"  readOnly checked={disclaimer===4?true:false} onClick={()=>{setDisclaimerIndex(4)}}/></div><div>Correct Receipent</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="custom" id="custom"  readOnly checked={disclaimer===5?true:false} onClick={()=>{setDisclaimerIndex(5)}}/></div><div>Custom</div></div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px] gap-[10px] pt-[20px]">
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
                            <div className={`${alignment==='l'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setAlignment('l')}}><AlignLeft width='40px'/></div>
                            <div className={`${alignment==='m'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setAlignment('m')}}><AlignCenter width='40px'/></div>
                            <div className={`${alignment==='r'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setAlignment('r')}}><AlignRight width='40px'/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div id="custom-button">
                            <div style={{'margin-left':'10px','margin-top':'10px','display':'grid','height':'1px','borderTop':'1px solid black'}}></div>
                            <div style={{'margin-left':'10px','marginBottom':'10px','fontSize':`${fontSize}px`,'color':fontColor,'paddingTop':'10px','textAlign':`${alignment==='l'?'left':alignment==='m'?'center':'right'}`}}>
                                {disclaimerarr[disclaimer]}
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