import { Envelope, Globe, Telephone } from "@styled-icons/bootstrap";
import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import { MapPin, Smartphone } from "@styled-icons/feather";
import defsign from '../../../assets/default-sig-photo.jpg'
export default function RightSideTemplate({variableInput}){
    return(
        <div style={{padding: "30px",display:'grid',gridTemplateColumns:'auto auto',width:'635px'}}>
                    <div style={{width:'fit-content',display:'grid'}}>
                    <div>
                            <div style={{color:'#646464',fontSize:'16px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#45668E',fontSize:'14px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? <></> : <>, &nbsp;</>}{variableInput.company}</p>
                    </div>
                    <p style={{fontSize:'11px',color:'#212121',whiteSpace:'pre-line',width:'fit-content',maxWidth:'420px',lineHeight:'20px'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.phone}`}><Telephone style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.phone}</a>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.mobile}`}><Smartphone style={{width: '13px',color:'#45668E',marginRight:'6px'}}/> {variableInput.mobile}</a>
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`mailto:${variableInput.email}`}><Envelope style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.email}</a>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`${variableInput.website}`}><Globe style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.website}</a> 
                        }
                        {
                            variableInput.address === ""?'':
                            <div style={{color:'inherit',textDecoration:'inherit',paddingRight:'7px',display:'inline-block'}}> <MapPin style={{width: '12px',color:'#45668E',marginRight:'6px'}}/> {variableInput.address}</div>
                        }
                    </p>
                        <div style={{display:'grid','gridAutoFlow':'column','paddingTop':'10px','width':'fit-content','gridGap':'8px'}}>
                        {
                           variableInput.fb === ""?'':<a href={`https://www.facebook.com/${variableInput.fb}`}>
                           <div style={{border: '1px solid #45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                   <FacebookF style={{width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a href={`https://www.insta.com/${variableInput.insta}`}>
                            <div style={{border: '1px solid #45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                    <Instagram style={{width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            <div style={{border: '1px solid #45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                    <LinkedinIn style={{width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a href={`https://www.twitter.com/${variableInput.twitter}`}>
                            <div style={{border: '1px solid #45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a href={`https://www.youtube.com/${variableInput.yt}`}>
                                <div style={{border: '1px solid #45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                        <Youtube style={{width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                <div style={{border: '1px solid #45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                        <Pinterest style={{width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                    </div>
                    </div>
                    <div style={{display:'grid',gap:'10px'}}>
                    {variableInput.url===""?<img style={{borderRadius:'100px'}} src={defsign} alt="User"/>:<img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px',borderRadius:'100px'}} alt="User"/>}
                    </div>
                </div>
    )
}