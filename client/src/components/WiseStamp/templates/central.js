import { Envelope, Globe, Telephone } from "@styled-icons/bootstrap";
import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import { MapPin, Smartphone } from "@styled-icons/feather";
import defsign from '../../../assets/default-sig-photo.jpg'
export default function CentralTemplate({variableInput}){
    return(
        <div style={{padding: "30px",display:'grid',gridTemplateColumns:'auto 76px 1fr',width:'635px',gap:'20px'}}>
                    <div style={{width:'fit-content',display:'grid'}}>
                    <div style={{textAlign:'end'}}>
                            <div style={{color:'#646464',fontSize:'16px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#45668E',fontSize:'14px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? <></> : <>, &nbsp;</>}{variableInput.company}</p>
                    </div>
                        <div style={{display:'grid','gridAutoFlow':'column','width':'fit-content','gridGap':'8px'}}>
                        {
                           variableInput.fb === ""?'':<a href={`https://www.facebook.com/${variableInput.fb}`}>
                           <div style={{background: '#45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                   <FacebookF style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a href={`https://www.insta.com/${variableInput.insta}`}>
                            <div style={{background: '#45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                    <Instagram style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            <div style={{background: '#45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                    <LinkedinIn style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a href={`https://www.twitter.com/${variableInput.twitter}`}>
                            <div style={{background: '#45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a href={`https://www.youtube.com/${variableInput.yt}`}>
                                <div style={{background: '#45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                        <Youtube style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                <div style={{background: '#45668E','borderRadius':'100px','color':'#45668E',width:'24px',height:'24px',display:'grid'}}>
                                        <Pinterest style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                    </div>
                    
                    </div>
                    <div style={{display:'grid',gap:'10px'}}>
                    {variableInput.url===""?<img style={{borderRadius:'100px'}} src={defsign} alt="User"/>:<img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px',borderRadius:'100px'}} alt="User"/>}
                    </div>
                    <p style={{fontSize:'11px',color:'#212121',whiteSpace:'pre-line',width:'fit-content',maxWidth:'420px',lineHeight:'20px',display:'grid'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <a style={{display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.phone}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Phone</div> {variableInput.phone}</a>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <a style={{display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.mobile}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Mobile</div> {variableInput.mobile}</a>
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <a style={{display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`mailto:${variableInput.email}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Email</div> {variableInput.email}</a>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <a style={{display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`${variableInput.website}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Website</div> {variableInput.website}</a> 
                        }
                        {
                            variableInput.address === ""?'':
                            <div style={{display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Address</div> {variableInput.address}</div>
                        }
                    </p>
                </div>
    )
}