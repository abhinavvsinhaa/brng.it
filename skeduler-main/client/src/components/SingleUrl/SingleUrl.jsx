import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleUrl(props) {
  return (<>
        <Link to={`/url/${props.varArr[1]}`} target='_blank' >{props.varArr[0]}</Link>
        <br/>
    </>
    )
}
