import { Calendar, CalendarStar, Droplet } from "@styled-icons/boxicons-solid"
import { Handshake } from "@styled-icons/fluentui-system-regular"
import { useState } from "react"
import { ChromePicker } from "react-color"

export default function OnlineScheduler({extraFields,onClose}){
    const [url,setUrl]=useState('')
    const [buttonText,setbuttonText] = useState('Book a meeting')
    const [buttonShape,setbuttonShape] = useState('10px')
    const [buttonType,setbuttonType] = useState('full')
    const [buttonColor,setbuttonColor] = useState('#1BA2EB')
    const [buttonSize,setbuttonSize] = useState('15px')
    const [buttoncolorDiv,setbuttoncolorDiv] = useState(false)
    const [selectedIcon,setselectedIcon] = useState('star')

    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_auto_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Online Meeting Scheduler  </div>
                </div>
                <div className="grid grid-rows-[40px_auto] gap-[10px] pl-[10px]">
                    <div className="font-bold text-[18px]">Choose Scheduling provider</div>
                    <div className="grid grid-rows-[50px_50px_50px] gap-[10px]">
                        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Scheduler Url</div>
                            <div className="grid">
                                <input value={url} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" type='text' onChange={(e)=>{setUrl(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-[30px_50px_50px_50px_50px_50px] gap-[10px]">
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Shape</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr]">
                            <div className="border-[2px] rounded-[0px] border-black w-4/5 justify-self-center" onClick={()=>{setbuttonShape('0px')}}></div>
                            <div className="border-[2px] rounded-[10px] border-black w-4/5 justify-self-center" onClick={()=>{setbuttonShape('10px')}}></div>
                            <div className="border-[2px] rounded-[60px] border-black w-4/5 justify-self-center" onClick={()=>{setbuttonShape('60px')}}></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Type</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] place-content-center place-items-center">
                            <div onClick={()=>{setbuttonType('full')}}>Full</div>
                            <div onClick={()=>{setbuttonType('light')}}>Light</div>
                            <div onClick={()=>{setbuttonType('slink')}}>Simple Link</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Color</div>
                        <div className="grid grid-cols-[auto_1fr] w-fit place-self-center gap-[10px]">
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
                                <div onClick={() => {setbuttonColor('#000')}} className={`cursor-pointer ${buttonColor==="#000"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-black`}></div>
                                <div onClick={() => {setbuttonColor('#9158BD')}} className={`cursor-pointer ${buttonColor==="#9158BD"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#9158BD]`}></div>
                                <div onClick={() => {setbuttonColor('#DE627B')}} className={`cursor-pointer ${buttonColor==="#DE627B"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#DE627B]`}></div>
                                <div onClick={() => {setbuttonColor('#1BA2EB')}} className={`cursor-pointer ${buttonColor==="#1BA2EB"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#1BA2EB]`}></div>
                                <div onClick={() => {setbuttonColor('#53B700')}} className={`cursor-pointer ${buttonColor==="#53B700"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#53B700]`}></div>
                                <div onClick={() => {setbuttonColor('#EEBE36')}} className={`cursor-pointer ${buttonColor==="#EEBE36"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#EEBE36]`}></div>
                                <div onClick={() => {setbuttonColor('#FF6009')}} className={`cursor-pointer ${buttonColor==="#FF6009"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#FF6009]`}></div>
                                <div onClick={() => {setbuttonColor('#B92424')}} className={`cursor-pointer ${buttonColor==="#B92424"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#B92424]`}></div>
                            </div>
                            <div className="relative grid place-content-center">
                                <div onClick={() => {setbuttoncolorDiv(!buttoncolorDiv)}} className="p-[1px] w-[30px] h-[30px] grid place-content-center rounded-full border-[1.5px] cursor-pointer border-black">
                                    <Droplet width='20px'/>
                                </div>
                                <div className="absolute top-full -left-[90%]">
                                    {buttoncolorDiv?
                                    (<ChromePicker color={buttonColor} onChangeComplete={(color) => {setbuttonColor(color.hex)}}/>)
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
                            <button onClick={()=>{setbuttonSize('15px')}} className={`${buttonSize==="15px"?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                S
                            </button>
                            <button onClick={()=>{setbuttonSize('20px')}} className={`${buttonSize==="20px"?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                M
                            </button>
                            <button onClick={()=>{setbuttonSize('25px')}} className={`${buttonSize==="25px"?'bg-black text-white':''} border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]`}>
                                L
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Icon</div>
                        <div className="grid grid-flow-col gap-[20px] w-fit">
                            <div className="grid grid-cols-[auto_1fr] gap-[10px]">
                                <div className="grid place-content-center">
                                    <input type="radio" name="star" id="star" onClick={()=>{setselectedIcon('star')}} checked={selectedIcon==='star'?true:false} />
                                </div>
                                <div className="grid place-content-center">
                                    <CalendarStar width={'20px'}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] gap-[10px]">
                                <div className="grid place-content-center">
                                    <input type="radio" name="norm" id="norm" onClick={()=>{setselectedIcon('norm')}} checked={selectedIcon==='norm'?true:false} />
                                </div>
                                <div className="grid place-content-center">
                                    <Calendar width={'20px'}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] gap-[10px]">
                                <div className="grid place-content-center">
                                    <input type="radio" name="hand" id="hand" onClick={()=>{setselectedIcon('hand')}} checked={selectedIcon==='hand'?true:false} />
                                </div>
                                <div className="grid place-content-center">
                                    <Handshake width={'20px'}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] gap-[10px]">
                                <div className="grid place-content-center">
                                    <input type="radio" name="none" id="none" onClick={()=>{setselectedIcon('none')}} checked={selectedIcon==='none'?true:false} />
                                </div>
                                <div className="grid place-content-center">
                                    None
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Button Text</div>
                        <div>
                            <input type="text" name="name" id="name" value={buttonText} onChange={(e)=>{setbuttonText(e.target.value)}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div id="custom-button" className="pt-[10px]">
                            <a href={url} style={{marginLeft:'10px',marginBottom:'10px','fontSize':`${buttonSize}`,'display':'grid','gridTemplateColumns':'auto 1fr','gap':'5px','fontWeight':'bold','padding':'10px','color':`white`,'width':'fit-content','height':'fit-content','borderRadius':buttonShape,'backgroundColor':`${buttonType==='full'?buttonColor:'transparent'}`,'border':`${buttonType==='light'?`2px solid ${buttonColor}`:''}`}}>
                                {
                                    selectedIcon==='star'?(<CalendarStar width={'20px'}/>):selectedIcon==='norm'?(<Calendar width={'20px'}/>):selectedIcon==='hand'?(<Handshake width={'20px'}/>):''
                                }
                                {buttonText}
                            </a>
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