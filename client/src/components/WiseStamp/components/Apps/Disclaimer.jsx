import { useState } from "react"

export default function Disclaimer(){
    const [fontSize,setfontSize] = useState('10px')
    const [fontColor,setfontColor] = useState('#808080')
    const [disclaimer,setDisclaimer] = useState(' IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof. ')
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_5fr_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Add a disclaimer</div>
                </div>
                <div className="grid grid-rows-[30px_auto]">
                    <div className="font-bold text-[20px] pl-[8px]">Choose your disclaimer type:</div>
                    <div>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px] gap-[10px]">
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Font Color</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Font Size</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Alignment</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" />
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div className="px-[10px] pt-[10px]">
                            <div style={{'display':'grid','height':'1px','borderTop':'1px solid black'}}></div>
                            <div style={{'fontSize':`${fontSize}`,'color':fontColor,'paddingTop':'10px'}}>
                                {disclaimer}
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}