import { useEffect, useState } from "react";
import generateImage from "../../utils/getSignImage";
import optionsParameter from './signParameters'
export default function SignOff(){
    const [optionParams,setoptionParams] = useState(optionsParameter);
    const [signatureText,setsignatureText] = useState('John Cena');
    const [signatureSize,setsignatureSize] = useState('20px');
    const [generatedImage,setgeneratedImage] = useState('data:image/png;base64,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');
    const updateoptionsParameter = (obj) => {
        const updatedVariable = {...optionParams , ...obj};
        setoptionParams(updatedVariable)
        setgeneratedImage(generateImage(updatedVariable))
    }
    const refereshImage = () => {
        var timestamp = new Date().getTime();
        document.getElementById('signatureimg').src+="?t="+timestamp;
    }
    return(
        <div className="grid grid-cols-[1fr_1.5fr] gap-[10px] h-full pl-[30px]">
            <div className="grid grid-rows-[1fr_3fr]">
                <div className="grid grid-rows-[1fr_3fr]">
                    <div className="font-bold pl-[5px] tracking-wide grid content-center">Choose your signoff:</div>
                    <div className="p-[7px] grid grid-cols-[1fr_1fr_1fr]">
                        <div className="">

                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="grid grid-rows-[50px_50px_50px_50px_50px] gap-[10px]">
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Sign as</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" value={signatureText} onChange={e => {setsignatureText(e.target.value);updateoptionsParameter({'textString':e.target.value})}} />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Sign as</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" value={signatureText} onChange={e => {setsignatureText(e.target.value);updateoptionsParameter({'textString':e.target.value})}} />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Text</div>
                        <input className="outline-0 pl-[5px] border-[#a9a9a9] border-b-[1px]" type="text" name="signname" id="signname" value={signatureText} onChange={e => {setsignatureText(e.target.value);updateoptionsParameter({'textString':e.target.value})}} />
                    </div>
                    <div className="grid grid-cols-[170px_auto]">
                        <div className="grid tracking-wide text-[16px] pl-[5px] items-center">Size</div>
                        <div className="grid justify-self-start grid-cols-[50px_50px_50px] gap-[5px]">
                            <button disabled={signatureSize==='15px'?true:false} onClick={() => {setsignatureSize('15px'); updateoptionsParameter({'font':["15px","'Homemade Apple"]})}} className="border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]">
                                S
                            </button>
                            <button disabled={signatureSize==='20px'?true:false} onClick={() => {setsignatureSize('20px'); updateoptionsParameter({'font':["20px","'Homemade Apple"]})}} className="border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]">
                                M
                            </button>
                            <button disabled={signatureSize==='25px'?true:false} onClick={() => {setsignatureSize('25px'); updateoptionsParameter({'font':["25px","'Homemade Apple"]})}} className="border border-black rounded-sm grid place-content-center text-gray-700 text-[17px]">
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
                        <img src={generatedImage} id='signatureimg' alt="" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}