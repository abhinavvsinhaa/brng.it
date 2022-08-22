import { Droplet } from "@styled-icons/boxicons-solid"
import { useState } from "react"
import { ChromePicker } from "react-color"
import {AlignLeft,AlignCenter,AlignRight} from "@styled-icons/feather"
export default function Video(){
    const [fontSize,setfontSize] = useState('10')
    const [fontColor,setfontColor] = useState('#808080')
    const [alignment,setAlignment] = useState('l')
    const [ytUrl,setytUrl] = useState('')
    const [title,settitle] = useState('')
    const [apiUrl,setApiUrl] = useState('')
    const [fontcolorDiv,setfontcolorDiv] = useState(false)
    const handleytUrl = (url) => {
        setytUrl(url)
        validateUrl(url)
    }
    const validateUrl = (url) => {
    if (url != undefined || url != '') {        
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            var vid = url.split('?v=')[1]
            setApiUrl(vid)
        } else {
            console.log('not valid')
            setApiUrl('')
            // Do anything for not being valid
        }
    }
}
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_auto_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">YouTube Video</div>
                </div>
                <div className="grid grid-rows-[30px_auto] gap-[10px]">
                    <div className="font-bold text-[20px] pl-[8px]">Enter your video URL &amp; title</div>
                    <div className="grid grid-rows-[1fr_1fr] gap-[10px]">
                        <div className="grid grid-rows-[auto_1fr] gap-[4px]">
                            <div className="font-bold text-[11px] pl-[10px]">YouTube video URL</div>
                            <div className="grid">
                                <input type="text" className="w-[55%]" name="url" id="url" value={ytUrl} placeholder="https://www.youtube.com/watch?v=123" onChange={(e)=>{handleytUrl(e.target.value)}} />
                            </div>
                        </div>
                        <div className="grid grid-rows-[auto_1fr] gap-[4px]">
                            <div className="font-bold text-[11px] pl-[10px]">Title</div>
                            <div className="grid">
                                <input type="text" className="w-[55%]" name="title" id="title" value={title} placeholder="Title" onChange={(e)=>{settitle(e.target.value)}} />
                            </div>
                        </div>
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
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div className="px-[10px] pt-[10px]">
                            <div style={{'display':'grid','height':'1px','borderTop':'1px solid black'}}></div>
                            <div style={{'fontSize':`${fontSize}px`,'color':fontColor,'paddingTop':'10px','textAlign':`${alignment==='l'?'left':alignment==='m'?'center':'right'}`}}>
                                {
                                    apiUrl===''?
                                    <div style={{color:'red',fontSize:'15px'}}>Link not valid! Please enter a valid link or check </div>
                                    :
                                    <iframe width="200" height="100" src={`https://www.youtube.com/embed/${apiUrl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                }
                                <br />
                                {
                                    title===''?''
                                    :
                                    <div style={{color:fontColor,fontSize:fontSize}}>{title}</div>
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}