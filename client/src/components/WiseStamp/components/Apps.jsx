import { QuoteAltLeft, RightArrowCircle } from "@styled-icons/boxicons-solid";
import { Leaf, Mobile } from "@styled-icons/entypo";
import { Calendar } from "@styled-icons/feather";
import { Braces, CameraVideo, Youtube } from "@styled-icons/bootstrap";
import { InkStroke } from "@styled-icons/fluentui-system-regular";
import { BurstSale } from "@styled-icons/foundation";
import { Gavel } from "@styled-icons/material-rounded";
import { useState } from "react";
import AppDrawer from "./Apps/AppDrawer";

export default function Apps(){
    const [whichDrawer,setwhichDrawer] = useState('');
    const [visible, setVisible] = useState(false);
    return(
        <>
        <div className="grid grid-rows-[auto_auto] gap-[10px]">
            <div className="grid grid-rows-[1fr_4fr] gap-[5px]">
                <div className="self-center pl-[5px] font-bold tracking-wider">ENHANCE YOUR SIGNATURE</div>
                <div className="grid grid-cols-[1fr_1fr] gap-[10px] h-fit px-[10px]">
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('signoff')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><InkStroke className="w-[25px] text-green-500 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Styled Signoff</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('disclaimer')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><Gavel className="w-[25px] text-blue-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Disclaimer</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('quote')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><QuoteAltLeft className="w-[25px] text-green-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Quote</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('greenfooter')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><Leaf className="w-[25px] text-green-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Grren Footer</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('video')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><Youtube className="w-[25px] font-bold"/></div>
                            <div className="pl-[5px] font-bold">Video</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_4fr] gap-[5px]">
                <div className="self-center pl-[5px] font-bold tracking-wider">CALL TO ACTION</div>
                <div className="grid grid-cols-[1fr_1fr] gap-[10px] px-[10px] h-fit">
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('custombutton')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><RightArrowCircle className="w-[25px] text-green-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Custom Button</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('salesevent')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><BurstSale className="w-[25px] text-blue-900 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Sales Event</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('downloadapp')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><Mobile className="w-[25px] text-blue-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Download App</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('onlinescheduler')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><Calendar className="w-[25px] text-green-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Online Scheduler</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('videoconference')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><CameraVideo className="w-[25px] text-blue-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Video Conference</div>
                        </div>
                    </div>
                    <div className="cursor-pointer grid grid-flow-col place-self-center h-[50px] w-full shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded bg-[#f8f9fb]" onClick={() => {setVisible(true);setwhichDrawer('customHTML')}}>
                        <div className="grid grid-cols-[auto_1fr] place-self-center gap-[8px]">
                            <div><Braces className="w-[25px] text-blue-700 font-bold"/></div>
                            <div className="pl-[5px] font-bold">Custom HTML</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AppDrawer visible={visible} setVisible={setVisible} whichApp={whichDrawer} />
        </>
    )
}