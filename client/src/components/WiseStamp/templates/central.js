import { Envelope, Globe, Telephone } from "@styled-icons/bootstrap";
import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import { MapPin, Smartphone } from "@styled-icons/feather";
import defsign from '../../../assets/default-sig-photo.jpg'
export default function CentralTemplate({variableInput,design}){
    return(
        <div style={{fontFamily:design.font,padding: "30px",paddingTop:design.spaceContent*30+'px',display:'grid',gridTemplateColumns:'auto 76px 1fr',gap:design.lineSpacing*20+'px',width:'635px'}}>
                    <div style={{width:'fit-content',borderRight:`${design.lineStyle} ${design.matchLineTemplate?design.templateColor:design.lineColor}`,display:'grid'}}>
                    <div style={{textAlign:'end',display:'grid',placeContent:'center',alignSelf:design.imagePosition,paddingRight:design.lineSpacing*10+'px'}}>
                            <div style={{color:design.templateColor,fontSize:(design.fontSize*16)+'px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#646464',fontSize:(design.fontSize*14)+'px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? <></> : <>, &nbsp;</>}{variableInput.company}</p>
                    </div>
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
                            <div style={{borderRadius:design.socialShape,background: `${design.matchTemplate?design.templateColor:'#5E495F'}`,width:design.socialSize*24+'px',height:design.socialSize*24+'px',display:'grid'}}>
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
                    <div style={{display:'grid',gap:'10px'}}>
                    {variableInput.url===""?<a href={design.imageLink}><img style={{borderRadius: design.imageShape==='rect'?'':design.imageShape==='round'?'10px':'100px'}} src={defsign} alt="User"/></a>:<a href={design.imageLink}><img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px',borderRadius:'100px'}} alt="User"/></a>}
                    </div>
                    <p style={{color:'#212121',width:'fit-content',maxWidth:'420px',lineHeight:'20px',display:'grid',gridAutoFlow:design.direction,paddingTop:design.lineSpacing*14+'px',fontSize:(design.fontSize*11)+'px',whiteSpace:'pre-line'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <a style={{color:design.textColor,display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.phone}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px',}}>Phone</div> {variableInput.phone}</a>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <a style={{color:design.textColor,display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.mobile}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Mobile</div> {variableInput.mobile}</a>
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <a style={{color:design.textColor,display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`mailto:${variableInput.email}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Email</div> {variableInput.email}</a>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <a style={{color:design.textColor,display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}} onMouseOut={(e) => {e.target.style.color="#45668E"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`${variableInput.website}`}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Website</div> {variableInput.website}</a> 
                        }
                        {
                            variableInput.address === ""?'':
                            <div style={{color:design.textColor,display:'grid',gap:'10px',textDecoration:'inherit',paddingRight:'7px',gridTemplateColumns:'auto 1fr'}}><div style={{'color':'#45668E','fontWeight':'bold','fontSize':'13px'}}>Address</div> {variableInput.address}</div>
                        }
                    </p>
                </div>
    )
}