import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import defsign from '../../../assets/default-sig-photo.jpg'
export default function ClassicTemplate({variableInput,design}){
    return(
        <div style={{fontFamily:design.font,padding: "30px",paddingTop:design.spaceContent*30+'px',display:'grid',gridTemplateColumns:'1fr 4fr',gap:design.lineSpacing*15+'px',width:'635px'}}>
                    <div style={{borderRight:'1.5px solid #BDBDBD',display:'grid'}}>
                    <div style={{display:'grid',placeContent:'center',alignSelf:design.imagePosition,paddingRight:design.lineSpacing*10+'px'}}>
                    {variableInput.url===""?<a href={design.imageLink}><img src={defsign} style={{borderRadius: design.imageShape==='rect'?'':design.imageShape==='round'?'10px':'100px'}} alt="User"/></a>:<a href={design.imageLink}><img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px'}} alt="User"/></a>}
                    </div>
                    </div>
                    <div>
                    <div style={{color:design.templateColor,fontSize:(design.fontSize*16)+'px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                    <p style={{color:'#646464',fontSize:(design.fontSize*13)+'px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? <>Hello</> : <>, &nbsp;</>}{variableInput.company}</p>
                    <p style={{paddingTop:design.lineSpacing*14+'px',fontSize:(design.fontSize*11)+'px',color:'#212121',whiteSpace:'nowrap'}}>
                        {
                            variableInput.phone===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'5px',borderRight:'1px solid black'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.phone}`}>{variableInput.phone}</a>
                        }
                        {
                            variableInput.mobile===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'5px',borderRight:'1px solid black'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`tel:${variableInput.mobile}`}> {variableInput.mobile}</a>
                        }
                        {
                            variableInput.email===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'5px',borderRight:'1px solid black'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`mailto:${variableInput.email}`}> {variableInput.email}</a>
                        }
                        {
                            variableInput.website===""?
                            ''
                            :
                            <a style={{color:'inherit',textDecoration:'inherit',paddingRight:'5px',borderRight:'1px solid black'}} onMouseOut={(e) => {e.target.style.color="inherit"}} onMouseOver={(e) => {e.target.style.color="#40a9ff"}} href={`${variableInput.website}`}> {variableInput.website}</a> 
                        }
                        <br/>
                        <div style={{paddingTop:'10px',paddingBottom:'10px',fontSize:(design.fontSize*11)+'px'}}>{variableInput.address}</div>
                    </p>
                    <div style={{display:'grid','gridAutoFlow':'column','width':'fit-content','gridGap':'10px'}}>
                    {
                           variableInput.fb === ""?'':<a href={`https://www.facebook.com/${variableInput.fb}`}>
                           <div style={{background: '#3B5998',width:'24px',height:'24px',display:'grid'}}>
                                   <FacebookF style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                           </div>
                       </a>
                        }
                        {
                            variableInput.insta === ""?'':<a href={`https://www.insta.com/${variableInput.insta}`}>
                            <div style={{background: '#E5495F',width:'24px',height:'24px',display:'grid'}}>
                                    <Instagram style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.linkedin === ""?'':<a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                            <div style={{background: '#2377B5',width:'24px',height:'24px',display:'grid'}}>
                                    <LinkedinIn style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.twitter === ""?'':<a href={`https://www.twitter.com/${variableInput.twitter}`}>
                            <div style={{background: '#55ACEE',width:'24px',height:'24px',display:'grid'}}>
                                    <Twitter style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                            </div>
                        </a>
                        }
                        {
                            variableInput.yt === ""?'':<a href={`https://www.youtube.com/${variableInput.yt}`}>
                                <div style={{background: '#CE3C35',width:'24px',height:'24px',display:'grid'}}>
                                        <Youtube style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                        {
                            variableInput.pinterest === ""?'':<a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                <div style={{background: '#BE3730',width:'24px',height:'24px',display:'grid'}}>
                                        <Pinterest style={{color:'white',width:'100%',height:'50%','placeSelf':'center'}} />
                                </div>
                            </a>
                        }
                    </div>
                    </div>
                </div>
    )
}