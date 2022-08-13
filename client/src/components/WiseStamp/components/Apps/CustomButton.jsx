import { ChevronRight } from "@styled-icons/boxicons-solid"
import { useState } from "react"

export default function CustomButton(){
    const [buttonText,setbuttonText] = useState('Check out my website')
    const [buttonUrl,setbuttonUrl] = useState('#')
    const [buttonShape,setbuttonShape] = useState('0px')
    const [buttonType,setbuttonType] = useState('full')
    const [buttonColor,setbuttonColor] = useState('#1BA2EB')
    const [buttonSize,setbuttonSize] = useState('20px')
    const [fontColor,setfontColor] = useState('#fff')
    const [alignment,setAlignment] = useState('l')
    const [arrowEnable,setArrowEnable] = useState(true)
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_2fr_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Custom Button</div>
                </div>
                <div className="grid grid-rows-[40px_auto] gap-[10px] pl-[10px]">
                    <div className="font-bold text-[18px]">Button Details</div>
                    <div className="grid grid-rows-[50px_50px]">
                        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Button text</div>
                            <div className="grid justify-content-center">
                                <input value={buttonText} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" type='text' onChange={(e)=>{setbuttonText(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
                            <div className="grid place-content-center text-[14px]">Button URL</div>
                            <div className="grid justify-content-center">
                                <input value={buttonUrl} className="outline-0 pl-[10px] border-[#a9a9a9] border-b-[1px]" type='text' onChange={(e)=>{setbuttonUrl(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px_50px_50px] gap-[10px]">
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Sign as</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Sign as</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Text</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Size</div>
                        <div className="grid justify-self-start grid-cols-[50px_50px_50px] gap-[5px]">
                            <button className="border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]">
                                S
                            </button>
                            <button className="border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]">
                                M
                            </button>
                            <button className="border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]">
                                L
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Alignment</div>
                        <div className="grid justify-self-start grid-cols-[50px_50px_50px]">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div className="px-[10px] py-[10px]">
                            <a href={buttonUrl} style={{'display':'grid','gap':'5px','gridTemplateColumns':`auto ${buttonSize}`,'fontWeight':'bold','padding':'5px 10px','color':`${fontColor}`,'width':'fit-content','height':'fit-content','borderRadius':buttonShape,'backgroundColor':`${buttonType==='full'?buttonColor:'transparent'}`,'border':`${buttonType==='light'?`2px solid ${buttonColor}`:''}`}}>
                                {buttonText}
                                <div style={{'display':'grid','width':`${buttonSize}`,'placeSelf':'center'}}>
                                    {arrowEnable?<ChevronRight/>:''}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}