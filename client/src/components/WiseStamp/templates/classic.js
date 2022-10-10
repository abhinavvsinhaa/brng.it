import { FacebookF, Instagram, LinkedinIn, Pinterest, Twitter, Youtube } from "@styled-icons/fa-brands";
import { useEffect } from "react";
import defsign from '../../../assets/default-sig-photo.jpg'
export default function ClassicTemplate({ variableInput, design, setDesign }) {
    useEffect(() => {
        const updatedVariable = { ...design, ...{ 'direction': 'column' } };
        setDesign(updatedVariable)
    }, [])
    return (
        <table style={{ fontFamily: design.font, padding: "30px", paddingTop: design.spaceContent * 30 + 'px', display: 'grid', gridTemplateColumns: '1fr 4fr', gap: design.lineSpacing * 15 + 'px', width: '635px' }}>
            <tbody>
                <tr>
                    <td style={{ width: '85px', borderRight: `${design.lineStyle} ${design.matchLineTemplate ? design.templateColor : design.lineColor}`, display: 'grid' }}>
                        <div style={{ display: 'grid', placeContent: 'center', alignSelf: design.imagePosition, paddingRight: design.lineSpacing * 10 + 'px' }}>
                            {variableInput.url === "" ? <a href={design.imageLink}><img src={defsign} style={{ borderRadius: design.imageShape === 'rect' ? '' : design.imageShape === 'round' ? '10px' : '100px' }} alt="User" /></a> : <a href={design.imageLink}><img src={`https://wisestamp-api.herokuapp.com/${variableInput.url}`} style={{ width: '125px' }} alt="User" /></a>}
                        </div>
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: '10px', color: design.templateColor, fontSize: (design.fontSize * 16) + 'px', lineHeight: '1.2', fontWeight: 'bold', textTransform: 'initial', letterSpacing: '0px' }}>{variableInput.name}</td>
                                </tr>
                                <tr>    
                                    <td style={{ paddingLeft: '10px', color: '#646464', fontSize: (design.fontSize * 13) + 'px', lineHeight: '1.2', fontWeight: 'bold', textTransform: 'initial' }}>{variableInput.titleSign}{(variableInput.company === "") ? <>Hello</> : <>, &nbsp;</>}{variableInput.company}</td>
                                </tr>
                                <tr>    
                                    <td style={{ paddingLeft: '10px', width: 'fit-content', margin: '0', display: 'grid', gap: '5px', gridAutoFlow: design.direction, paddingTop: design.lineSpacing * 14 + 'px', fontSize: (design.fontSize * 11) + 'px', color: '#212121', whiteSpace: 'nowrap' }}>
                                        {
                                            variableInput.phone === "" ?
                                                ''
                                                :
                                                <a style={{ color: design.textColor, height: 'fit-content', gap: '4px', textDecoration: 'inherit', paddingRight: '5px', display: 'grid', gridTemplateColumns: '1fr 10px' }} onMouseOut={(e) => { e.target.style.color = "inherit" }} onMouseOver={(e) => { e.target.style.color = "#40a9ff" }} href={`tel:${variableInput.phone}`}>
                                                    {variableInput.phone}
                                                    <div style={{ display: 'grid' }}>
                                                        {
                                                            design.seperator === 'line' ? <div style={{ width: '1px', background: design.textColor, justifySelf: 'center' }}></div> : design.seperator === 'dot' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor, borderRadius: '1000px' }}></div> : design.seperator === 'square' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor }}></div> : <div></div>
                                                        }
                                                    </div>
                                                </a>
                                        }
                                        {
                                            variableInput.mobile === "" ?
                                                ''
                                                :
                                                <a style={{ color: design.textColor, height: 'fit-content', gap: '4px', textDecoration: 'inherit', paddingRight: '5px', display: 'grid', gridTemplateColumns: '1fr 10px' }} onMouseOut={(e) => { e.target.style.color = "inherit" }} onMouseOver={(e) => { e.target.style.color = "#40a9ff" }} href={`tel:${variableInput.mobile}`}>
                                                    {variableInput.mobile}
                                                    <div style={{ display: 'grid' }}>
                                                        {
                                                            design.seperator === 'line' ? <div style={{ width: '1px', background: design.textColor, justifySelf: 'center' }}></div> : design.seperator === 'dot' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor, borderRadius: '1000px' }}></div> : design.seperator === 'square' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor }}></div> : <div></div>
                                                        }
                                                    </div>
                                                </a>
                                        }
                                        {
                                            variableInput.email === "" ?
                                                ''
                                                :
                                                <a style={{ color: design.textColor, height: 'fit-content', gap: '4px', textDecoration: 'inherit', paddingRight: '5px', display: 'grid', gridTemplateColumns: '1fr 10px' }} onMouseOut={(e) => { e.target.style.color = "inherit" }} onMouseOver={(e) => { e.target.style.color = "#40a9ff" }} href={`mailto:${variableInput.email}`}>
                                                    {variableInput.email}
                                                    <div style={{ display: 'grid' }}>
                                                        {
                                                            design.seperator === 'line' ? <div style={{ width: '1px', background: design.textColor, justifySelf: 'center' }}></div> : design.seperator === 'dot' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor, borderRadius: '1000px' }}></div> : design.seperator === 'square' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor }}></div> : <div></div>
                                                        }
                                                    </div>
                                                </a>
                                        }
                                        {
                                            variableInput.website === "" ?
                                                ''
                                                :
                                                <a style={{ color: design.textColor, height: 'fit-content', gap: '4px', textDecoration: 'inherit', paddingRight: '5px', display: 'grid', gridTemplateColumns: '1fr 10px' }} onMouseOut={(e) => { e.target.style.color = "inherit" }} onMouseOver={(e) => { e.target.style.color = "#40a9ff" }} href={`${variableInput.website}`}>
                                                    {variableInput.website}
                                                    <div style={{ display: 'grid' }}>
                                                        {
                                                            design.seperator === 'line' ? <div style={{ width: '1px', background: design.textColor, justifySelf: 'center' }}></div> : design.seperator === 'dot' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor, borderRadius: '1000px' }}></div> : design.seperator === 'square' ? <div style={{ width: '6px', height: '6px', display: 'grid', placeSelf: 'center', background: design.textColor }}></div> : <div></div>
                                                        }
                                                    </div>
                                                </a>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', color: design.textColor, paddingTop: '10px', paddingBottom: '10px', fontSize: (design.fontSize * 11) + 'px' }}>{variableInput.address}</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', display: 'grid', 'gridAutoFlow': 'column', 'width': 'fit-content', 'gridGap': design.socialSpace * 10 + 'px' }}>
                                        {
                                            variableInput.fb === "" ? '' : <a href={`https://www.facebook.com/${variableInput.fb}`}>
                                                {
                                                    design.socialFill === 1 ?
                                                        <div style={{ borderRadius: design.socialShape, background: `${design.matchTemplate ? design.templateColor : '#3B5998'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                            <FacebookF style={{ color: 'white', width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                        </div>
                                                        :
                                                        design.socialFill === 2 ?
                                                            <div style={{ borderRadius: design.socialShape, border: `1px solid ${design.matchTemplate ? design.templateColor : '#3B5998'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                <FacebookF style={{ color: `${design.matchTemplate ? design.templateColor : '#3B5998'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                            </div>
                                                            :
                                                            design.socialFill === 3 ?
                                                                <div style={{ borderRadius: design.socialShape, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                    <FacebookF style={{ color: `${design.matchTemplate ? design.templateColor : '#3B5998'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                                </div>
                                                                :
                                                                ''
                                                }
                                            </a>
                                        }
                                        {
                                            variableInput.insta === "" ? '' : <a href={`https://www.insta.com/${variableInput.insta}`}>
                                                {
                                                    design.socialFill === 1 ?
                                                        <div style={{ borderRadius: design.socialShape, background: `${design.matchTemplate ? design.templateColor : '#E5495F'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                            <Instagram style={{ color: 'white', width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                        </div>
                                                        :
                                                        design.socialFill === 2 ?
                                                            <div style={{ borderRadius: design.socialShape, border: `1px solid ${design.matchTemplate ? design.templateColor : '#E5495F'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                <Instagram style={{ color: `${design.matchTemplate ? design.templateColor : '#E5495F'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                            </div>
                                                            :
                                                            design.socialFill === 3 ?
                                                                <div style={{ borderRadius: design.socialShape, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                    <Instagram style={{ color: `${design.matchTemplate ? design.templateColor : '#E5495F'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                                </div>
                                                                :
                                                                ''
                                                }
                                            </a>
                                        }
                                        {
                                            variableInput.linkedin === "" ? '' : <a href={`https://www.linkedin.com/${variableInput.linkedin}`}>
                                                {
                                                    design.socialFill === 1 ?
                                                        <div style={{ borderRadius: design.socialShape, background: `${design.matchTemplate ? design.templateColor : '#2377B5'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                            <LinkedinIn style={{ color: 'white', width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                        </div>
                                                        :
                                                        design.socialFill === 2 ?
                                                            <div style={{ borderRadius: design.socialShape, border: `1px solid ${design.matchTemplate ? design.templateColor : '#2377B5'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                <LinkedinIn style={{ color: `${design.matchTemplate ? design.templateColor : '#2377B5'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                            </div>
                                                            :
                                                            design.socialFill === 3 ?
                                                                <div style={{ borderRadius: design.socialShape, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                    <LinkedinIn style={{ color: `${design.matchTemplate ? design.templateColor : '#2377B5'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                                </div>
                                                                :
                                                                ''
                                                }
                                            </a>
                                        }
                                        {
                                            variableInput.twitter === "" ? '' : <a href={`https://www.twitter.com/${variableInput.twitter}`}>
                                                {
                                                    design.socialFill === 1 ?
                                                        <div style={{ borderRadius: design.socialShape, background: `${design.matchTemplate ? design.templateColor : '#55ACEE'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                            <Twitter style={{ color: 'white', width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                        </div>
                                                        :
                                                        design.socialFill === 2 ?
                                                            <div style={{ borderRadius: design.socialShape, border: `1px solid ${design.matchTemplate ? design.templateColor : '#55ACEE'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                <Twitter style={{ color: `${design.matchTemplate ? design.templateColor : '#55ACEE'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                            </div>
                                                            :
                                                            design.socialFill === 3 ?
                                                                <div style={{ borderRadius: design.socialShape, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                    <Twitter style={{ color: `${design.matchTemplate ? design.templateColor : '#55ACEE'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                                </div>
                                                                :
                                                                ''
                                                }
                                            </a>
                                        }
                                        {
                                            variableInput.yt === "" ? '' : <a href={`https://www.youtube.com/${variableInput.yt}`}>
                                                {
                                                    design.socialFill === 1 ?
                                                        <div style={{ borderRadius: design.socialShape, background: `${design.matchTemplate ? design.templateColor : '#CE3C35'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                            <Youtube style={{ color: 'white', width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                        </div>
                                                        :
                                                        design.socialFill === 2 ?
                                                            <div style={{ borderRadius: design.socialShape, border: `1px solid ${design.matchTemplate ? design.templateColor : '#CE3C35'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                <Youtube style={{ color: `${design.matchTemplate ? design.templateColor : '#CE3C35'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                            </div>
                                                            :
                                                            design.socialFill === 3 ?
                                                                <div style={{ borderRadius: design.socialShape, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                    <Youtube style={{ color: `${design.matchTemplate ? design.templateColor : '#CE3C35'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                                </div>
                                                                :
                                                                ''
                                                }
                                            </a>
                                        }
                                        {
                                            variableInput.pinterest === "" ? '' : <a href={`https://www.pinterest.com/${variableInput.pinterest}`}>
                                                {
                                                    design.socialFill === 1 ?
                                                        <div style={{ borderRadius: design.socialShape, background: `${design.matchTemplate ? design.templateColor : '#BE3730'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                            <Pinterest style={{ color: 'white', width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                        </div>
                                                        :
                                                        design.socialFill === 2 ?
                                                            <div style={{ borderRadius: design.socialShape, border: `1px solid ${design.matchTemplate ? design.templateColor : '#BE3730'}`, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                <Pinterest style={{ color: `${design.matchTemplate ? design.templateColor : '#BE3730'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                            </div>
                                                            :
                                                            design.socialFill === 3 ?
                                                                <div style={{ borderRadius: design.socialShape, width: design.socialSize * 24 + 'px', height: design.socialSize * 24 + 'px', display: 'grid' }}>
                                                                    <FacebookF style={{ color: `${design.matchTemplate ? design.templateColor : '#BE3730'}`, width: '100%', height: '50%', 'placeSelf': 'center' }} />
                                                                </div>
                                                                :
                                                                ''
                                                }
                                            </a>
                                        }
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