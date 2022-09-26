import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import defsign from '../../../assets/default-sig-photo.jpg'
import { useEffect } from "react";

export default function HorizontalTemplate({variableInput,design,setDesign}){
    useEffect(()=>{
        const updatedVariable = {...design , ...{'direction':'column'}};
        setDesign(updatedVariable)
    },[])
    return(
        <div style={{padding: "30px",display:'grid',gridTemplateColumns:'1fr 4fr',gap:'15px',width:'635px'}}>
                    <div>
                    <div style={{display:'grid',placeContent:'center',paddingRight:'10px'}}>
                    {variableInput.url===""?<img src={defsign} alt="User"/>:<img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{width:'125px'}} alt="User"/>}
                    </div>
                    </div>
                    <div style={{width:'fit-content'}}>
                        <div style={{borderBottom:'solid 2px #BDBDBD'}}>
                            <div style={{color:'#45668E',fontSize:'16px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial',letterSpacing:'0px'}}>{variableInput.name}</div>
                            <p style={{marginBottom:'10px',color:'#646464',fontSize:'13px',lineHeight:'1.2',fontWeight:'bold',textTransform:'initial'}}>{variableInput.titleSign}{ (variableInput.company === "") ? <>Hello</> : <>, &nbsp;</>}{variableInput.company}</p>
                        </div>
                    <p style={{paddingTop:'14px',fontSize:'11px',color:'#212121',whiteSpace:'nowrap'}}>
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
                        <div style={{paddingTop:'10px',paddingBottom:'10px',fontSize:'11px'}}>{variableInput.address}</div>
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