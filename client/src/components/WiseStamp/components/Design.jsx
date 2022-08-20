import { Droplet } from "@styled-icons/feather";
import { useState } from "react";
import { ChromePicker } from "react-color"
export default function Design({design,setDesign}){
    const updateDesign = (obj) => {
        const updatedVariable = {...design , ...obj};
        setDesign(updatedVariable)
    }
    const [fontcolorDiv,setfontcolorDiv] = useState(false)
    return(
        <div className="p-[10px] grid grid-rows-[auto_170px_auto_auto_auto] gap-[10px]">
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
                                <div onClick={() => {updateDesign({'templateColor':'#DE627B'})}} className={`cursor-pointer ${design.templateColor==="#DE627B"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#DE627B]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#1BA2EB'})}} className={`cursor-pointer ${design.templateColor==="#1BA2EB"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#1BA2EB]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#53B700'})}} className={`cursor-pointer ${design.templateColor==="#53B700"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#53B700]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#EEBE36'})}} className={`cursor-pointer ${design.templateColor==="#EEBE36"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#EEBE36]`}></div>
                                <div onClick={() => {updateDesign({'templateColor':'#FF6009'})}} className={`cursor-pointer ${design.templateColor==="#FF6009"?'border-blue-500 border-2':''} rounded-full w-[20px] h-[20px] place-self-center bg-[#FF6009]`}></div>
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
        </div>
    )
}