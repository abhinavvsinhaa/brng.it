import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import {Mobile} from "@styled-icons/entypo";
import {Telephone} from "@styled-icons/bootstrap";
import {EmailOutline} from "@styled-icons/evaicons-outline"
import {Web} from "@styled-icons/foundation";
import { useEffect } from "react";

import {Location} from "@styled-icons/evil"
import defsign from '../../../assets/default-sig-photo.jpg'
export default function StripTemplate({variableInput,design,setDesign}){
    useEffect(()=>{
        const updatedVariable = {...design , ...{'direction':'column'}};
        setDesign(updatedVariable)
    },[])
    return(
        <div style={{padding:"30px"}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 4fr',gap:'15px',width:'635px'}}>
                    <div>
                    <div style={{display:'grid',placeContent:'center',paddingRight:'10px'}}>
                    {variableInput.url===""?<img src={defsign} alt="User"/>:<img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px'}} alt="User"/>}
                    </div>
                    </div>
                    <div style={{width:'fit-content'}}>
                        <div>
                            <div style={{color:'#45668E',fontSize:'16px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#000',fontSize:'13px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? '' : <>, &nbsp;</>}{variableInput.company}</p>
                        </div>
                        <p style={{fontSize:'11px',color:'#212121',whiteSpace:'nowrap'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <div style={{marginBottom: "8px"}}>
                            <Telephone style = {{width: "15px",height: "15px",marginRight: "5px",color: "#45668E",display:'inline-block',verticalAlign:'middle','overflow':'hidden'}} />
                            <a  href={`tel:${variableInput.phone}`}>{variableInput.phone}</a></div>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <div style={{marginBottom: "8px"}}>
                            <Mobile style = {{width: "15px",height: "15px",marginRight: "5px",color: "#45668E",display:'inline-block',verticalAlign:'middle','overflow':'hidden'}} />
                            <a  href={`tel:${variableInput.mobile}`}>{variableInput.mobile}</a></div>     
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <div style={{marginBottom: "8px"}}>
                            <EmailOutline style = {{width: "15px",height: "15px",marginRight: "5px",color: "#45668E",display:'inline-block',verticalAlign:'middle','overflow':'hidden'}} />
                            <a  href={`mailto:${variableInput.email}`}>{variableInput.email}</a></div>    
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <div style={{marginBottom: "8px"}}>
                            <Web style = {{width: "15px",height: "15px",marginRight: "5px",color: "#45668E",display:'inline-block',verticalAlign:'middle','overflow':'hidden'}} />
                            <a  href={`${variableInput.website}`}>{variableInput.website}</a></div>    
                        }
                        {
                            variableInput.address===""?'':
                            <div style={{marginBottom: "8px"}}>
                            <Location style = {{width: "15px",height: "15px",marginRight: "5px",color: "#45668E",display:'inline-block',verticalAlign:'middle','overflow':'hidden'}} />
                            <span >{variableInput.address}</span></div>
                        }
                        {/* <div style={{display:"inline-grid"}}>
                            <Location style = {{width: "15px",height: "15px",marginRight: "5px",color: "#45668E"}} />
                            <div style={{paddingTop:'10px',paddingBottom:'10px'}}>{variableInput.address}</div>
                        </div> */}
                        </p>
                    </div>
        </div>
        <div style={{display:'grid','width':'635px','alignContent':'center','height':'50px','justifyContent':'end','background':'#45668E'}}>
            <div style={{display:'grid',gridAutoFlow:'column','gap':'8px','paddingRight':'8px'}}>
                        {
                           variableInput.fb === ""?'':<a href={`https://www.facebook.com/${variableInput.fb}`}>
                           <div style={{border:'1px solid white',borderRadius:'999px',width:'24px',height:'24px',display:'grid'}}>
                                   <FacebookF style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a href={`https://www.insta.com/${variableInput.insta}`}>
                            <div style={{border:'1px solid white',borderRadius:'999px',width:'24px',height:'24px',display:'grid'}}>
                                    <Instagram style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            <div style={{border:'1px solid white',borderRadius:'999px',width:'24px',height:'24px',display:'grid'}}>
                                    <LinkedinIn style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a href={`https://www.twitter.com/${variableInput.twitter}`}>
                            <div style={{border:'1px solid white',borderRadius:'999px',width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a href={`https://www.youtube.com/${variableInput.yt}`}>
                                <div style={{border:'1px solid white',borderRadius:'999px',width:'24px',height:'24px',display:'grid'}}>
                                        <Youtube style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                <div style={{border:'1px solid white',borderRadius:'999px',width:'24px',height:'24px',display:'grid'}}>
                                        <Pinterest style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        </div>
                    </div>
        </div>
    )
}