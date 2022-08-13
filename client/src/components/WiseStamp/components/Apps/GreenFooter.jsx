import { Droplet } from "@styled-icons/boxicons-solid"
import { Leaf } from "@styled-icons/entypo"
import { AlignCenter, AlignLeft, AlignRight } from "@styled-icons/feather"
import { Trees } from "@styled-icons/foundation"
import { useState } from "react"
import { ChromePicker } from "react-color"

export default function GreenFooter(){
    const [fontColor,setfontColor] = useState('#53B700')
    const [fontSize,setfontSize] = useState('10')
    const [alignment,setalignment] = useState('l')
    const [fontcolorDiv,setfontcolorDiv] = useState(false)
    const [greenIndex,setgreenIndex] = useState(0)
    const [icon,setIcon] = useState('tree')
    const greenarr = [' Please consider your environmental responsibility. Before printing this e-mail message, ask yourself whether you really need a hard copy. ',' Please consider the environment before printing this e-mail! '
    ,' Do you really need to print this email? ',' Printing emails kills trees. Print is murder! '," Don't print this, Ok? ",' Printing emails is SO 2009 ',' Save a tree - kill a beaver '," Be like me, be Carbon free - don't print this and save a tree "
    ," Save ink cartridges from going extinct! Don't print this email! "
]
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_auto_7fr]">
                <div className="grid">
                    <div className="font-bold pl-[5px] text-[30px] tracking-wide grid content-center">Add a green footer</div>
                </div>
                <div className="grid grid-rows-[40px_auto] gap-[10px] pl-[10px]">
                    <div className="font-bold text-[18px]">Choose a text</div>
                    <div className="grid grid-rows-[20px_20px_20px_20px_20px_20px_20px_20px_20px] gap-[10px]">
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="conf" id="conf" checked={greenIndex===0?true:false} onClick={()=>{setgreenIndex(0)}}/></div><div>Environmental responsibility</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="vir" id="vir" checked={greenIndex===1?true:false} onClick={()=>{setgreenIndex(1)}}/></div><div>Environmental responsibility short</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="nbrand" id="nbrand" checked={greenIndex===2?true:false} onClick={()=>{setgreenIndex(2)}}/></div><div>Do you really need...?</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="po" id="po" checked={greenIndex===3?true:false} onClick={()=>{setgreenIndex(3)}}/></div><div>Printing kills trees</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="cr" id="cr" checked={greenIndex===4?true:false} onClick={()=>{setgreenIndex(4)}}/></div><div>Don't print this</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="custom" id="custom" checked={greenIndex===5?true:false} onClick={()=>{setgreenIndex(5)}}/></div><div>Printing email is SO 2009</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="custom" id="custom" checked={greenIndex===6?true:false} onClick={()=>{setgreenIndex(6)}}/></div><div>Save a tree - kill a beaver</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="custom" id="custom" checked={greenIndex===7?true:false} onClick={()=>{setgreenIndex(7)}}/></div><div>Be Carbon free</div></div>
                        <div className="grid grid-cols-[auto_1fr] gap-[10px] place-content-center"><div className="grid place-content-center"><input type="radio" name="custom" id="custom" checked={greenIndex===8?true:false} onClick={()=>{setgreenIndex(8)}}/></div><div>Save ink catridges</div></div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px_50px_50px] gap-[10px] pt-[30px]">
                    <div className="font-bold text-[20px] pl-[10px]">Footer Style</div>
                <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Icon</div>
                        <div className="grid grid-cols-[auto_1fr] w-fit place-self-center gap-[10px]">
                            <div className="grid grid-cols-[1fr_1fr_1fr] gap-[25px]">
                                <div className={`grid grid-cols-[auto_1fr] gap-[5px]`}>
                                    <div className="grid place-content-center">
                                        <input checked={icon==='tree'?true:false} onClick={() => {setIcon('tree')}} type="radio" name="tree" id="tree" />
                                    </div>
                                    <div className="grid place-content-center">
                                        <Trees width={'40px'} color='#53B700'/>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-[auto_1fr] gap-[5px]`}>
                                <div className="grid place-content-center">
                                        <input checked={icon==='leaf'?true:false} onClick={() => {setIcon('leaf')}} type="radio" name="leaf" id="leaf" />
                                    </div>
                                    <div className="grid place-content-center">
                                        <Leaf width={'40px'} color='#53B700'/>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-[auto_1fr] gap-[5px]`}>
                                <div className="grid place-content-center">
                                        <input checked={icon==='none'?true:false} onClick={() => {setIcon('none')}} type="radio" name="none" id="none" />
                                    </div>
                                    <div className="grid place-content-center">
                                        None
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Banner alignment</div>
                        <div className="grid grid-flow-col gap-[10px] w-fit">
                            <div className={`${alignment==='l'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setalignment('l')}}><AlignLeft width='40px'/></div>
                            <div className={`${alignment==='m'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setalignment('m')}}><AlignCenter width='40px'/></div>
                            <div className={`${alignment==='r'?'bg-black text-white':''} w-[50px] grid place-content-center border border-black text-black`} onClick={()=>{setalignment('r')}}><AlignRight width='40px'/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[1fr_100px]">
                <div className="">
                    <div className="overflow-hidden rounded-lg w-[695px] grid grid-rows-[26px_1fr] h-[200px] shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] bg-[#f8f9fb]">
                        <div className="bg-[#292c33] text-white pl-[8px] py-[3px]">New Message</div>
                        <div className="pl-[10px] pt-[10px]">
                            <div style={{display:'grid','gridTemplateColumns':'auto 1fr','width':'fit-content'}}>
                                    <div style={{'borderRight':'1px solid lightgray'}}>
                                        {
                                            icon==='tree'?(<Trees width={'40px'} color='#53B700'/>):icon==='leaf'?(<Leaf width={'40px'} color='#53B700'/>):('')
                                        }
                                    </div>
                                    <div style={{'color':fontColor,'fontSize':`${fontSize}px`,'textAlign':`${alignment==='l'?'left':alignment==='m'?'center':'right'}`,'paddingLeft':'10px','display':'grid','placeContent':'center','letterSpacing':'1.8'}}>
                                        {greenarr[greenIndex]}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}