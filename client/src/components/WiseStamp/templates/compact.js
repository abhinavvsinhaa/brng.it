import { Envelope, Globe, Telephone } from "@styled-icons/bootstrap";
import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import { MapPin, Smartphone } from "@styled-icons/feather";
import { useEffect } from "react";
import defsign from '../../../assets/default-sig-photo.jpg'
export default function CompactTemplate({variableInput,design,setDesign}){
    useEffect(()=>{
        const updatedVariable = {...design , ...{'direction':'column'}};
        setDesign(updatedVariable)
    },[])
    return(
        <table style={{fontFamily:design.font,margin: "30px"}}>
            <tbody>
                <tr>
                    <td style={{display:'grid',width:'65px',marginRight:'20px'}}>
                    <div style={{display:'grid',gap:design.lineSpacing*10+'px'}}>
                    {variableInput.url===""?<a href={design.imageLink}><img style={{borderRadius: design.imageShape==='rect'?'':design.imageShape==='round'?'10px':'100px'}} src={defsign} alt="User"/></a>:<img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px',borderRadius:'100%'}} alt="User"/>}
                    </div>
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <div style={{display:'grid',alignContent:'center'}}>
                            <div style={{color:design.templateColor,fontSize:(design.fontSize*16)+'px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#45668E',fontSize:(design.fontSize*14),lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? <></> : <>, &nbsp;</>}<div>{variableInput.company}</div></p>
                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div style={{width:'fit-content',display:'grid',gridTemplateRows:'1fr auto'}}>
                    <p style={{display:'grid',gap:'5px',fontSize:'11px',color:'#212121',whiteSpace:'pre-line',width:'fit-content',maxWidth:'420px',lineHeight:'20px'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <a style={{color:design.textColor,textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.phone}`}><Telephone style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.phone}</a>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <a style={{color:design.textColor,textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.mobile}`}><Smartphone style={{width: '13px',color:'#45668E',marginRight:'6px'}}/> {variableInput.mobile}</a>
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <a style={{color:design.textColor,textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`mailto:${variableInput.email}`}><Envelope style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.email}</a>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <a style={{color:design.textColor,textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`${variableInput.website}`}><Globe style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.website}</a> 
                        }
                        {
                            variableInput.address === ""?'':
                            <div style={{color:design.textColor,textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}}> <MapPin style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.address}</div>
                        }
                    </p>
                    <div style={{display:'grid','gridAutoFlow':'column','width':'fit-content','gridGap':design.socialSpace*10+'px'}}>
                    {
                           variableInput.fb === ""?'':<a href={`https://www.facebook.com/${variableInput.fb}`}>
                           {
                            design.socialFill===1?
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#3B5998'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <FacebookF style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 2?
                            <div style={{borderRadius:design.socialShape,border: `1px solid ${design.matchTemplate?design.templateColor:'#3B5998'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <FacebookF style={{color:`${design.matchTemplate?design.templateColor:'#3B5998'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 3?
                            <div style={{borderRadius:design.socialShape,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <FacebookF style={{color:`${design.matchTemplate?design.templateColor:'#3B5998'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            ''
                           }
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a href={`https://www.insta.com/${variableInput.insta}`}>
                            {
                            design.socialFill===1?
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#E5495F'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                    <Instagram style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 2?
                            <div style={{borderRadius:design.socialShape,border: `1px solid ${design.matchTemplate?design.templateColor:'#E5495F'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Instagram style={{color:`${design.matchTemplate?design.templateColor:'#E5495F'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 3?
                            <div style={{borderRadius:design.socialShape,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Instagram style={{color:`${design.matchTemplate?design.templateColor:'#E5495F'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            ''
                           }
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            {
                            design.socialFill===1?
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#2377B5'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                    <LinkedinIn style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 2?
                            <div style={{borderRadius:design.socialShape,border: `1px solid ${design.matchTemplate?design.templateColor:'#2377B5'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <LinkedinIn style={{color:`${design.matchTemplate?design.templateColor:'#2377B5'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 3?
                            <div style={{borderRadius:design.socialShape,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <LinkedinIn style={{color:`${design.matchTemplate?design.templateColor:'#2377B5'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            ''
                           }
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a href={`https://www.twitter.com/${variableInput.twitter}`}>
                            {
                            design.socialFill===1?
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#55ACEE'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 2?
                            <div style={{borderRadius:design.socialShape,border: `1px solid ${design.matchTemplate?design.templateColor:'#55ACEE'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Twitter style={{color:`${design.matchTemplate?design.templateColor:'#55ACEE'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 3?
                            <div style={{borderRadius:design.socialShape,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Twitter style={{color:`${design.matchTemplate?design.templateColor:'#55ACEE'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            ''
                           }
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a href={`https://www.youtube.com/${variableInput.yt}`}>
                                {
                            design.socialFill===1?
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#CE3C35'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                    <Youtube style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 2?
                            <div style={{borderRadius:design.socialShape,border: `1px solid ${design.matchTemplate?design.templateColor:'#CE3C35'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Youtube style={{color:`${design.matchTemplate?design.templateColor:'#CE3C35'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 3?
                            <div style={{borderRadius:design.socialShape,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Youtube style={{color:`${design.matchTemplate?design.templateColor:'#CE3C35'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            ''
                           }
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                {
                            design.socialFill===1?
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#BE3730'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                    <Pinterest style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 2?
                            <div style={{borderRadius:design.socialShape,border: `1px solid ${design.matchTemplate?design.templateColor:'#BE3730'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <Pinterest style={{color:`${design.matchTemplate?design.templateColor:'#BE3730'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            design.socialFill === 3?
                            <div style={{borderRadius:design.socialShape,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
                                   <FacebookF style={{color:`${design.matchTemplate?design.templateColor:'#BE3730'}`,width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                            :
                            ''
                           }
                            </a>
                        }
                    </div>
                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    </tr>
                    </tbody>
                </table>
    )
}