import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import {Mobile} from "@styled-icons/entypo";
import {Telephone} from "@styled-icons/bootstrap";
import {EmailOutline} from "@styled-icons/evaicons-outline"
import {Web} from "@styled-icons/foundation";
import {Location} from "@styled-icons/evil"
import defsign from '../../../assets/default-sig-photo.jpg'
import { useEffect } from "react";
export default function CorporateTemplate({variableInput,design,setDesign}){
    useEffect(()=>{
        const updatedVariable = {...design , ...{'direction':'column'}};
        setDesign(updatedVariable)
    },[])
    return(
        <div style={{fontFamily:design.font,padding:"30px"}}>
        <div style={{display:'grid',gridTemplateRows:'auto 1fr',gap:design.lineSpacing*15+'px',width:'fit-content'}}>
                    <div>
                    <div style={{display:'grid',alignContent:'center',paddingRight:'10px'}}>
                    {variableInput.url===""?<img style={{borderRadius:'100px'}} src={defsign} alt="User"/>:<a href={design.imageLink}><img src={`${variableInput.url}`} style={{width:'80px',borderRadius:'100px'}} alt="User"/></a>}
                    </div>
                    </div>
                    <div style={{width:'fit-content'}}>
                        <div>
                            <div style={{color:'#45668E',fontSize:'16px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#000',fontSize:'13px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? '' : <>, &nbsp;</>}{variableInput.company}</p>
                        </div>
                    </div>
        </div>
        <div style={{display:'grid',gap:'10px','gridTemplateRows':'auto 1fr','width':'fit-content','paddingLeft':'20px','paddingTop':'20px','paddingBottom':'20px','paddingRight':'80px','background':design.templateColor}}>
            <div>
            <p style={{fontSize:'11px',color:'white',whiteSpace:'nowrap'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'10px'}}>
                            <div style={{color:'white','fontWeight':'bold'}}>P</div>
                            <a  href={`tel:${variableInput.phone}`}>{variableInput.phone}</a></div>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'10px'}}>
                            <div style={{color:'white','fontWeight':'bold'}}>M</div>
                            <a  href={`tel:${variableInput.mobile}`}>{variableInput.mobile}</a></div>    
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'10px'}}>
                            <div style={{color:'white','fontWeight':'bold'}}>E</div>
                            <a  href={`mailto:${variableInput.email}`}>{variableInput.email}</a></div>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'10px'}}>
                            <div style={{color:'white','fontWeight':'bold'}}>W</div>
                            <a  href={`${variableInput.website}`}>{variableInput.website}</a></div>
                        }
                        {
                            variableInput.address===""?'':
                            <div style={{marginBottom: "8px",display:'grid',gridTemplateColumns:'auto 1fr',gap:'10px'}}>
                            <div style={{color:'white','fontWeight':'bold'}}>A</div>
                            <span >{variableInput.address}</span></div>
                        }
                        </p>
            </div>
            <div style={{display:'grid',gridAutoFlow:'column','gap':'8px','paddingRight':'8px'}}>
                        {
                           variableInput.fb === ""?'':<a href={`https://www.facebook.com/${variableInput.fb}`}>
                           <div style={{width:'24px',height:'24px',display:'grid'}}>
                                   <FacebookF style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a href={`https://www.insta.com/${variableInput.insta}`}>
                            <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <Instagram style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <LinkedinIn style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a href={`https://www.twitter.com/${variableInput.twitter}`}>
                            <div style={{width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a href={`https://www.youtube.com/${variableInput.yt}`}>
                                <div style={{width:'24px',height:'24px',display:'grid'}}>
                                        <Youtube style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                <div style={{width:'24px',height:'24px',display:'grid'}}>
                                        <Pinterest style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        </div>
                    </div>
        </div>
    )
}