import React, {useState} from "react";
import Display from "./Display";
import {Tabs } from 'antd';
import 'antd/dist/antd.css';
import Template from "./Template";
import Design from "./Design";
import { FacebookF, Instagram, LinkedinIn, Pinterest,  Twitter, Youtube } from "@styled-icons/fa-brands";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Apps from "./Apps";
import { CreditCard2Front, PaintBucket, PencilSquare } from "@styled-icons/bootstrap";
import { Share } from "@styled-icons/entypo";
import { AppsAddIn } from "@styled-icons/fluentui-system-regular";

const { TabPane } = Tabs;

function App() {
    const [file,setFile] = useState();
    const [isLoading,setisLoading] = useState(false);
    const [name , setName] = useState("John Cena");
    const [url , setURL] = useState("");
    const [fb , setfb] = useState("");
    const [insta , setinsta] = useState("");
    const [linkedin , setlinkedin] = useState("");
    const [twitter , settwitter] = useState("");
    const [yt , setyt] = useState("");
    const [pinterest , setpinterest] = useState("");
    const [titleSign , setTitleSign] = useState("Online Manager");
    const [company , setComapny] = useState("Google");
    const [phone , setPhone] = useState("9866521423");
    const [mobile , setMobile] = useState("6669854123");
    const [website , setWebsite] = useState("https://www.test.com");
    const [email , setEmail] = useState("test@test.com");
    const [address , setAddress] = useState("Near Metro Station, USA");
    const [font , setFont] = useState("Arial");
    const [fontSize , setFontSize] = useState(1.0);
    const [lineSpacing , setlineSpacing] = useState(1.0);
    const [spaceContent , setspaceContent] = useState(1);
    const [templateColor , settemplateColor] = useState('#45668E');
    const [imageShape , setImageShape] = useState('rect');
    const [imageSize , setimageSize] = useState(14);
    const [imagePosition , setimagePosition] = useState('baseline');
    const [imageLink , setimageLink] = useState('');
    const [label , setLabel] = useState(1);
    const [direction , setDirection] = useState('column');
    const [seperator , setseperator] = useState('line');
    const [textColor , settextColor] = useState('#000');
    const [socialFill , setsocialFill] = useState(1);
    const [socialShape , setsocialShape] = useState('0px');
    const [socialSize , setsocialSize] = useState(1);
    const [socialSpace , setsocialSpace] = useState(1);
    const [matchTemplate , setmatchTemplate] = useState(false);
    const [lineStyle , setlineStyle] = useState('1px solid');
    const [matchLineTemplate , setmatchLineTemplate] = useState(false);
    const [lineColor , setlineColor] = useState('#BDBDBD');
    const [extraFields, setExtraFields] = useState([]);
    const [selectedTemplate , setSelectedTemplate] = useState(1);
    const [variableInput , setVariableInput] = useState({name:name,url:url,titleSign:titleSign,company:company,phone:phone,mobile:mobile,website:website,email:email,address:address,fb:fb,insta:insta,linkedin:linkedin,twitter:twitter,yt:yt,pinterest:pinterest,extraFields:extraFields});
    const [design,setDesign] = useState({font : font , fontSize,lineSpacing,spaceContent,templateColor,imageShape,imageSize,imagePosition,
        imageLink,label,direction,seperator,textColor,socialFill,socialShape,socialSize,socialSpace,matchTemplate,matchLineTemplate,lineColor,lineStyle})
    // const [formSubmitted, setFormSubmitted] = useState(false);

    // const handleEmailSignatureFormSubmission = e => {
    //     e.preventDefault();
    //     setFormSubmitted(true);
    // }
    const updateVariableInput = (obj) => {
        const updatedVariable = {...variableInput , ...obj};
        setVariableInput(updatedVariable)
    }
    const setExtraFieldsHelper = (added) => {
        setExtraFields(current => [...current, added]);
    }
    const submitPhoto = (e) =>{
        setFile()
        const data = new FormData();
        data.append('file',e.target.files[0])
        console.log(file)
        setisLoading(true);
        axios.post("https://wisestamp-api.herokuapp.com/getPath",data).then(res => {console.log(res.data.path);setURL(res.data.path);updateVariableInput({'url':res.data.path}); setisLoading(false)})
    }

    return (
        <>
        <div className="h-screen w-full grid">
            <div className="grid grid-cols-[2.5fr_1fr]">
                    <div className="bg-[#F0F2F5] grid content-start justify-center">
                        {/* { */}
                            {/* formSubmitted &&  */}
                            
                            <Display
                                variableInput={variableInput}
                                selectedTemplate={selectedTemplate}
                                setisLoading={setisLoading}
                                design={design}
                                setDesign={setDesign}
                                extraFields={extraFields}
                            />
                        {/* } */}
                    </div>
                    <div className="relative h-[89vh] overflow-y-scroll">
                    <Tabs defaultActiveKey="1" className="">
                        <TabPane className="bg-[#F8F9FB]" tab={<div className="grid grid-flow-row gap-[5px] place-items-center text-center"> <PencilSquare className="w-[28px]"/> Details</div>} key="details">
                            <div className="grid grid-cols-[2fr_1fr] bg-white shadow-md rounded p-[20px]">
                            <form className="">
                                <div className="mb-3">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input type="name" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" value={name} onChange={e => {setName(e.target.value); updateVariableInput({'name': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="title" value={titleSign} onChange={e => {setTitleSign(e.target.value); updateVariableInput({'titleSign': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="company" value={company} onChange={e => {setComapny(e.target.value); updateVariableInput({'company': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" value={phone} onChange={e => {setPhone(e.target.value); updateVariableInput({'phone': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile</label>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="mobile" value={mobile} onChange={e => {setMobile(e.target.value); updateVariableInput({'mobile': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">Website</label>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="website" value={website} onChange={e => {setWebsite(e.target.value); updateVariableInput({'website': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" value={email} onChange={e => {setEmail(e.target.value); updateVariableInput({'email': e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" value={address} onChange={e => {setAddress(e.target.value); updateVariableInput({'address': e.target.value})}}/>
                                </div>
                            </form>
                            <form onSubmit={(e) => {e.preventDefault()}}>
                            <div className="flex justify-center items-center w-full p-[10px]">
                                {
                                    url===""?
                                    <div className="grid">
    <label htmlFor="dropzone-file" className="h-fit p-[10px] flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col justify-center items-center">
            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="text-center mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
        </div>
        <input required id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={(e) => {submitPhoto(e)}}/>
    </label>
    </div>
    :
    <div className="grid gap-[10px]">
    <img src={`https://wisestamp-api.herokuapp.com/${url}`} alt="User"/>
    <button onClick={() => {setURL(""); updateVariableInput({'url':''})}} className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
    </div>
}
</div>
                            </form>
                            </div>
                        </TabPane>
                        <TabPane tab={<div className="grid grid-flow-row gap-[5px] place-items-center text-center"> <Share className="w-[28px]"/> Social</div>} key="social">
                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                                <div className="mb-3 grid grid-cols-[auto_1fr] gap-[10px]">
                                    <div className="bg-[#3B5998] w-[40px] h-[40px] rounded-full grid">
                                        <FacebookF className="text-white w-full h-1/2 place-self-center"/>
                                    </div>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b-[1px] border-solid border-gray-300 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" aria-describedby="emailHelp" value={fb} placeholder="facebook.com/<username>" onChange={e => {setfb(e.target.value); updateVariableInput({'fb': e.target.value})}}/>
                                </div>
                                <div className="mb-3 grid grid-cols-[auto_1fr] gap-[10px]">
                                    <div className="bg-[#E5495F] w-[40px] h-[40px] rounded-full grid">
                                        <Instagram className="text-white w-full h-1/2 place-self-center"/>
                                    </div>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b-[1px] border-solid border-gray-300 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" aria-describedby="emailHelp" value={insta} placeholder="instagram.com/<username>" onChange={e => {setinsta(e.target.value); updateVariableInput({'insta': e.target.value})}}/>
                                </div>
                                <div className="mb-3 grid grid-cols-[auto_1fr] gap-[10px]">
                                    <div className="bg-[#2377B5] w-[40px] h-[40px] rounded-full grid">
                                        <LinkedinIn className="text-white w-full h-1/2 place-self-center"/>
                                    </div>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b-[1px] border-solid border-gray-300 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" aria-describedby="emailHelp" value={linkedin} placeholder="linkedin.com/<username>" onChange={e => {setlinkedin(e.target.value); updateVariableInput({'linkedin': e.target.value})}}/>
                                </div>
                                <div className="mb-3 grid grid-cols-[auto_1fr] gap-[10px]">
                                    <div className="bg-[#55ACEE] w-[40px] h-[40px] rounded-full grid">
                                        <Twitter className="text-white w-full h-1/2 place-self-center"/>
                                    </div>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b-[1px] border-solid border-gray-300 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" aria-describedby="emailHelp" value={twitter} placeholder="twitter.com/<username>" onChange={e => {settwitter(e.target.value); updateVariableInput({'twitter': e.target.value})}}/>
                                </div>
                                <div className="mb-3 grid grid-cols-[auto_1fr] gap-[10px]">
                                    <div className="bg-[#CE3C35] w-[40px] h-[40px] rounded-full grid">
                                        <Youtube className="text-white w-full h-1/2 place-self-center"/>
                                    </div>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b-[1px] border-solid border-gray-300 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" aria-describedby="emailHelp" value={yt} placeholder="youtube.com/<username>" onChange={e => {setyt(e.target.value); updateVariableInput({'yt': e.target.value})}}/>
                                </div>
                                <div className="mb-3 grid grid-cols-[auto_1fr] gap-[10px]">
                                    <div className="bg-[#BE3730] w-[40px] h-[40px] rounded-full grid">
                                        <Pinterest className="text-white w-full h-1/2 place-self-center"/>
                                    </div>
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b-[1px] border-solid border-gray-300 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" aria-describedby="emailHelp" value={pinterest} placeholder="pinterest.com/<username>" onChange={e => {setpinterest(e.target.value); updateVariableInput({'pinterest': e.target.value})}}/>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={<div className="grid grid-flow-row gap-[5px] place-items-center text-center"> <CreditCard2Front className="w-[28px]"/> Templates</div>} key="template">
                            <Template setDesign={setDesign} selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate}/>
                        </TabPane>
                        <TabPane tab={<div className="grid grid-flow-row gap-[5px] place-items-center text-center"> <PaintBucket className="w-[28px]"/> Design</div>} key="design">
                            <Design design={design} setDesign={setDesign}/>    
                        </TabPane>
                        <TabPane tab={<div className="grid grid-flow-row gap-[5px] place-items-center text-center"> <AppsAddIn className="w-[28px]"/> Apps</div>} key="apps">
                            <Apps extraFields={setExtraFieldsHelper}/>
                        </TabPane>
                    </Tabs>
                    </div>
            </div>   
        </div>
        <div className={`${isLoading===true?'absolute':'hidden'} top-0 left-0 bg-[#d1d5db96] w-full h-full z-[999] grid place-content-center`}>
            <InfinitySpin width='200' color="#4fa94d"/>
        </div>
        </>
    );
}


export default App;