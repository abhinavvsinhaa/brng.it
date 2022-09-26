import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import {Mobile} from "@styled-icons/entypo";
import {Telephone} from "@styled-icons/bootstrap";
import {EmailOutline} from "@styled-icons/evaicons-outline"
import {Web} from "@styled-icons/foundation";
import { useEffect } from "react";

import {Location} from "@styled-icons/evil"
import defsign from '../../../assets/default-sig-photo.jpg'
export default function TopBarTemplate({variableInput,design,setDesign}){
    useEffect(()=>{
        const updatedVariable = {...design , ...{'direction':'column'}};
        setDesign(updatedVariable)
    },[])
    return(
        <div style={{padding:"30px"}}>
        <div style={{display:'grid',gridTemplateColumns:'auto 1fr',placeContent:'center',width:'500px','background':'#45668E'}}>
                    <div>
                    <div style={{display:'grid',placeContent:'center',paddingRight:'10px'}}>
                    {variableInput.url===""?<img src={defsign} alt="User"/>:<img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px'}} alt="User"/>}
                    </div>
                    </div>
                    <div style={{width:'fit-content',display:'grid',placeItems:'center'}}>
                        <div style={{display:'grid'}}>
                            <p style={{marginBottom:'2px',color:'#fff',fontSize:'13px',lineHeight:'1.2',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? '' : <>, &nbsp;</>}{variableInput.company}</p>
                            <div style={{color:'#fff',fontSize:'16px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                        </div>
                    </div>
        </div>
        <div style={{display:'grid',gap:'10px',marginTop:'15px','gridTemplateRows':'auto 1fr','width':'500px'}}>
            <div style={{'padding':'20px 20px 0px 90px'}}>
            <p style={{fontSize:'11px',color:'black',whiteSpace:'pre-line',display:'flex',flexWrap:'wrap',gap:'5px 8px'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'7px'}}>
                            <a  href={`tel:${variableInput.phone}`}>{variableInput.phone}</a></div>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'7px'}}>
                            <a  href={`tel:${variableInput.mobile}`}>{variableInput.mobile}</a></div>    
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'7px'}}>
                            <a  href={`mailto:${variableInput.email}`}>{variableInput.email}</a></div>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'7px'}}>
                            <a  href={`${variableInput.website}`}>{variableInput.website}</a></div>
                        }
                        {
                            variableInput.address===""?'':
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'7px'}}>
                            <span >{variableInput.address}</span></div>
                        }
                        </p>
            </div>
            <div style={{display:'flex','gap':'8px','paddingLeft':'90px',paddingBottom:'20px'}}>
                        {
                           variableInput.fb === ""?'':<a style={{width:'fit-content'}} href={`https://www.facebook.com/${variableInput.fb}`}>
                           <div style={{width:'24px',height:'24px',display:'grid'}}>
                                   <FacebookF style={{color:'#3B5998',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a style={{width:'fit-content'}} href={`https://www.insta.com/${variableInput.insta}`}>
                            <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <Instagram style={{color:'#E5495F',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a style={{width:'fit-content'}} href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <LinkedinIn style={{color:'#2377B5',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a style={{width:'fit-content'}} href={`https://www.twitter.com/${variableInput.twitter}`}>
                            <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'#55ACEE',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a style={{width:'fit-content'}} href={`https://www.youtube.com/${variableInput.yt}`}>
                                <div style={{width:'24px',height:'24px',display:'grid'}}>
                                        <Youtube style={{color:'#CE3C35',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a style={{width:'fit-content'}} href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                <div style={{width:'24px',height:'24px',display:'grid'}}>
                                        <Pinterest style={{color:'#BE3730',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        </div>
                    </div>
        </div>
    )
}