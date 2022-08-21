import { Twitter } from "@styled-icons/fa-brands";
import { Droplet, Phone } from "@styled-icons/feather";
import { useState } from "react";
import { ChromePicker } from "react-color"
export default function Design({design,setDesign}){
    const updateDesign = (obj) => {
        const updatedVariable = {...design , ...obj};
        setDesign(updatedVariable)
    }
    const [fontcolorDiv,setfontcolorDiv] = useState(false)
    return(
        <div className="p-[10px] grid grid-rows-[auto_170px_220px_270px_210px] gap-[10px]">
            <div className="grid grid-rows-[auto_1fr]">
                <div className="font-bold tracking-[3px]">FONT &amp; COLOR</div>
                <div className="p-[10px] gap-[7px] grid grid-rows-[1fr_1fr_1fr_1fr_1fr]">
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Font</div>
                        <div>
                            <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="font" id="font">
                                <option value="arial">Arial</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Font Size</div>
                        <div className="grid place-self-center w-[80%]">
                            <input type="number" step="0.25" name="size" id="size" onChange={(e)=>{updateDesign({'fontSize':e.target.value})}} value={design.fontSize} min='0.75' max='1.5' />
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Line spacing</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[5px]">
                            <div className={`border-2 grid place-content-center rounded ${design.lineSpacing===0.5?'text-blue-700 border-blue-600':''}`} onClick={() => {updateDesign({'lineSpacing':0.5})}}>0.5</div>
                            <div className={`border-2 grid place-content-center rounded ${design.lineSpacing===1.0?'text-blue-700 border-blue-600':''}`} onClick={() => {updateDesign({'lineSpacing':1.0})}}>1.0</div>
                            <div className={`border-2 grid place-content-center rounded ${design.lineSpacing===1.5?'text-blue-700 border-blue-600':''}`} onClick={() => {updateDesign({'lineSpacing':1.5})}}>1.5</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Space from content</div>
                        <div className="grid place-self-center w-[80%]">
                            <input type="number" step="0.25" name="size" id="size" onChange={(e)=>{updateDesign({'spaceContent':e.target.value})}} value={design.spaceContent} min='0.5' max='2' />
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Template color</div>
                        <div className="grid grid-cols-[auto_1fr] w-fit place-self-center gap-[10px]">
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
                                <div onClick={() => {updateDesign({'templateColor':'#000'})}} className={`cursor-pointer ${design.templateColor==="#000"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-black`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#9158BD'})}} className={`cursor-pointer ${design.templateColor==="#9158BD"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#9158BD]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#616161'})}} className={`cursor-pointer ${design.templateColor==="#616161"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#DE627B]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#1BA2EB'})}} className={`cursor-pointer ${design.templateColor==="#757575"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#757575]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#53B700'})}} className={`cursor-pointer ${design.templateColor==="#53B700"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#53B700]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#EEBE36'})}} className={`cursor-pointer ${design.templateColor==="#EEBE36"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#EEBE36]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#E9E9E9'})}} className={`cursor-pointer ${design.templateColor==="#E9E9E9"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#E9E9E9]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#B92424'})}} className={`cursor-pointer ${design.templateColor==="#B92424"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#B92424]`}></div>
                            </div>
                            <div className="relative grid place-content-center">
                                <div onClick={() => {setfontcolorDiv(!fontcolorDiv)}} className="p-[1px] w-[30px] h-[30px] grid place-content-center rounded-full border-[1.5px] cursor-pointer border-black">
                                    <Droplet width='20px'/>
                                </div>
                                <div className="absolute -left-[650%] top-[120%]">
                                    {fontcolorDiv?
                                    (<ChromePicker color={design.fontColor} onChangeComplete={(color) => {updateDesign({'fontColor':color.hex})}}/>)
                                    :
                                    ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div className="font-bold tracking-[3px]">IMAGES</div>
                <div className="p-[10px] gap-[7px] grid grid-rows-[1fr_1fr_1fr]">
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Shape</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[3px]">
                            <div onClick={()=>{updateDesign({'imageShape':'rect'})}} className={`rounded-md grid place-content-center cursor-pointer ${design.imageShape==='rect'?'border-blue-500 border-2':'border'}`}>
                                <div className="border-2 w-[25px] h-[25px] border-blue-300 place-self-center grid"></div>
                            </div>
                            <div onClick={()=>{updateDesign({'imageShape':'round'})}} className={`rounded-md grid place-content-center cursor-pointer ${design.imageShape==='round'?'border-blue-500 border-2':'border'}`}>
                                <div className="border-2 w-[25px] h-[25px] rounded-lg border-blue-300 place-self-center grid"></div>
                            </div>
                            <div onClick={()=>{updateDesign({'imageShape':'circle'})}} className={`rounded-md grid place-content-center cursor-pointer ${design.imageShape==='circle'?'border-blue-500 border-2':'border'}`}>
                                <div className="border-2 w-[25px] h-[25px] rounded-full border-blue-300 place-self-center grid"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Position</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[5px]">
                            <div className={`rounded-md grid place-content-center ${design.imagePosition==='baseline'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'imagePosition':'baseline'})}}>T</div>
                            <div className={`rounded-md grid place-content-center ${design.imagePosition==='center'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'imagePosition':'center'})}}>M</div>
                            <div className={`rounded-md grid place-content-center ${design.imagePosition==='end'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'imagePosition':'end'})}}>B</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Image Link</div>
                        <div className="grid w-[80%]">
                            <input type='text' placeholder="https://www.website.com" onChange={(e) => {updateDesign({'imageLink':e.target.value})}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div className="font-bold tracking-[3px]">DETAILS</div>
                <div className="p-[10px] gap-[7px] grid grid-rows-[1fr_1fr_1fr_1fr]">
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Label</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[3px]">
                            <div onClick={()=>{updateDesign({'label':1})}} className={`rounded-md grid place-content-center cursor-pointer ${design.label===1?'border-blue-500 border-2':'border'}`}>
                                Phone
                            </div>
                            <div onClick={()=>{updateDesign({'label':2})}} className={`rounded-md grid place-content-center cursor-pointer ${design.label===2?'border-blue-500 border-2':'border'}`}>
                                P
                            </div>
                            <div onClick={()=>{updateDesign({'label':3})}} className={`rounded-md grid place-content-center cursor-pointer ${design.label===3?'border-blue-500 border-2':'border'}`}>
                                <Phone width={'19px'}/>
                            </div>
                            <div onClick={()=>{updateDesign({'label':0})}} className={`rounded-md grid place-content-center cursor-pointer ${design.label===0?'border-blue-500 border-2':'border'}`}>
                                None
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Direction</div>
                        <div className="grid grid-cols-[1fr_1fr] gap-[5px]">
                            <div className={`rounded-md grid place-content-center ${design.direction==='column'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'direction':'column'})}}>
                                X
                            </div>
                            <div className={`rounded-md grid place-content-center ${design.direction==='row'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'direction':'row'})}}>Y</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Seperator</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[7px]">
                            <div className={`rounded-md grid place-content-center ${design.seperator==='line'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'seperator':'line'})}}>
                                <div className="w-[3px] h-[20px] place-self-center bg-blue-600"></div>
                            </div>
                            <div className={`rounded-md grid place-content-center ${design.seperator==='dot'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'seperator':'dot'})}}>
                                <div className="w-[10px] h-[10px] rounded-full place-self-center bg-blue-600"></div>
                            </div>
                            <div className={`rounded-md grid place-content-center ${design.seperator==='square'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'seperator':'square'})}}>
                                <div className="w-[10px] h-[10px] place-self-center bg-blue-600"></div>
                            </div>
                            <div className={`rounded-md grid place-content-center ${design.seperator==='n'?'border-2 border-blue-300':'border'}`} onClick={()=>{updateDesign({'seperator':'n'})}}>
                                None
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Text color</div>
                        <div className="grid grid-cols-[auto_1fr] w-fit place-self-center gap-[10px]">
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
                                <div onClick={() => {updateDesign({'textColor':'#000'})}} className={`cursor-pointer ${design.textColor==="#000"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-black`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#424242'})}} className={`cursor-pointer ${design.textColor==="#424242"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#424242]`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#DE627B'})}} className={`cursor-pointer ${design.textColor==="#616161"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#616161]`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#757575'})}} className={`cursor-pointer ${design.textColor==="#757575"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#757575]`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#9E9E9E'})}} className={`cursor-pointer ${design.textColor==="#9E9E9E"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#9E9E9E]`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#BDBDBD'})}} className={`cursor-pointer ${design.textColor==="#BDBDBD"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#BDBDBD]`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#E9E9E9'})}} className={`cursor-pointer ${design.textColor==="#E9E9E9"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#E9E9E9]`}></div>
                                <div onClick={() => {updateDesign({'textColor':'#FFFFFF'})}} className={`cursor-pointer ${design.textColor==="#FFFFFF"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#FFFFFF]`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div className="font-bold tracking-[3px]">SOCIAL ICONS</div>
                <div className="p-[10px] gap-[7px] grid grid-rows-[1fr_1fr_1fr_1fr_1fr]">
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Fill</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[3px]">
                            <div onClick={()=>{updateDesign({'socialFill':1})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialFill===1?'border-blue-500 border-2':'border'}`}>
                                <div style={{background: '#55ACEE',width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </div>
                            <div onClick={()=>{updateDesign({'socialFill':2})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialFill===2?'border-blue-500 border-2':'border'}`}>
                                <div style={{border:`1px solid #55ACEE`,width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'#55ACEE',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </div>
                            <div onClick={()=>{updateDesign({'socialFill':3})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialFill===3?'border-blue-500 border-2':'border'}`}>
                                <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'#55ACEE',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Shape</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[3px]">
                            <div onClick={()=>{updateDesign({'socialShape':'0px'})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialShape==='0px'?'border-blue-500 border-2':'border'}`}>
                                <div className="border-2 w-[25px] h-[25px] border-blue-300 place-self-center grid"></div>
                            </div>
                            <div onClick={()=>{updateDesign({'socialShape':'5px'})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialShape==='5px'?'border-blue-500 border-2':'border'}`}>
                                <div className="border-2 w-[25px] h-[25px] rounded-lg border-blue-300 place-self-center grid"></div>
                            </div>
                            <div onClick={()=>{updateDesign({'socialShape':'1000px'})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialShape==='1000px'?'border-blue-500 border-2':'border'}`}>
                                <div className="border-2 w-[25px] h-[25px] rounded-full border-blue-300 place-self-center grid"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Size</div>
                        <div className="grid place-self-center w-[80%]">
                            <input type="range" name="size" step='0.25' id="size" onChange={(e)=>{updateDesign({'socialSize':e.target.value})}} value={design.socialSize} min='0.5' max='1.5' />
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Space between</div>
                        <div className="grid place-self-center w-[80%]">
                            <input type="range" name="size" step='0.25' id="size" onChange={(e)=>{updateDesign({'socialSpace':e.target.value})}} value={design.socialSpace} min='1' max='2.5' />
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Match with template color</div>
                        <div className="grid place-self-center w-[80%] h-[90%]">
                            <input type="checkbox" checked={design.matchTemplate} onClick={()=>{updateDesign({'matchTemplate':!design.matchTemplate})}} id="checked-checkbox" className="place-self-center w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-800 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div className="font-bold tracking-[3px]">DECORATIVE LINE</div>
                <div className="p-[10px] gap-[7px] grid grid-rows-[1fr_1fr_1fr]">
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Style</div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[3px]">
                            <div onClick={()=>{updateDesign({'socialFill':1})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialFill===1?'border-blue-500 border-2':'border'}`}>
                                <div style={{background: '#55ACEE',width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </div>
                            <div onClick={()=>{updateDesign({'socialFill':2})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialFill===2?'border-blue-500 border-2':'border'}`}>
                                <div style={{border:`1px solid #55ACEE`,width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'#55ACEE',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </div>
                            <div onClick={()=>{updateDesign({'socialFill':3})}} className={`rounded-md grid place-content-center cursor-pointer ${design.socialFill===3?'border-blue-500 border-2':'border'}`}>
                                <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'#55ACEE',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600 gap-[10px]">Match with template color</div>
                        <div className="grid place-self-center w-[80%] h-[90%]">
                            <input type="checkbox" checked={design.matchLineTemplate} onClick={()=>{updateDesign({'matchLineTemplate':!design.matchLineTemplate})}} id="checked-checkbox" className="place-self-center w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-800 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className="grid align-content-center text-gray-600">Color</div>
                        <div className="grid grid-cols-[auto_1fr] w-fit place-self-center gap-[10px]">
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
                                <div onClick={() => {updateDesign({'lineColor':'#000'})}} className={`cursor-pointer ${design.lineColor==="#000"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-black`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#424242'})}} className={`cursor-pointer ${design.lineColor==="#424242"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#424242]`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#DE627B'})}} className={`cursor-pointer ${design.lineColor==="#616161"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#616161]`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#757575'})}} className={`cursor-pointer ${design.lineColor==="#757575"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#757575]`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#9E9E9E'})}} className={`cursor-pointer ${design.lineColor==="#9E9E9E"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#9E9E9E]`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#BDBDBD'})}} className={`cursor-pointer ${design.lineColor==="#BDBDBD"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#BDBDBD]`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#FF6009'})}} className={`cursor-pointer ${design.lineColor==="#E9E9E9"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#E9E9E9]`}></div>
                                <div onClick={() => {updateDesign({'lineColor':'#FFFFFF'})}} className={`cursor-pointer ${design.lineColor==="#FFFFFF"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#FFFFFF]`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}