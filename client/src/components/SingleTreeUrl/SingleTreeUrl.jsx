import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleTreeUrl({treeArr}) {
  return (
    <span>
      {treeArr && <Link to={`/tree/${treeArr.uid}`} target='_blank' >{treeArr.short}</Link>}
    </span>
  )
}
