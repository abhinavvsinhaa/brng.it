import { useState } from "react"
import googleplay from '../../../../assets/icons/google-play-badge.png';
import appstore from '../../../../assets/icons/app-store-badge.png';
export default function DownloadApp(){
    const [buttonSize,setbuttonSize] = useState('20px')
    const [fontColor,setfontColor] = useState('#fff')
    const [fontSize,setfontSize] = useState('10px')
    const [alignment,setalignment] = useState('10px')
    const [title,setTitle] = useState('Download our app')
    const [playLink,setplayLink] = useState('https://play.google.com/store/apps/details?id=APP_ID')
    const [appStoreLink,setappStoreLink] = useState('https://itunes.apple.com/us/app/APP_NAME')

    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_5fr_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Download our app</div>
                </div>
                <div></div>
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
                        <div className="pl-[10px] pt-[10px]">
                            <div style={{'fontSize':`${fontSize}`,'letterSpacing':'1.5px'}}>Download our app</div>
                            <div style={{padding:'10px 0px','display':'grid','gridAutoFlow':'column','gap':'10px','width':'fit-content'}}>
                                <a href={playLink}>
                                    <img src={googleplay} width="120px"/>
                                </a>
                                <a href={appStoreLink}>
                                    <img src={appstore} width="109px"/>
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