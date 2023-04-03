import React from 'react'
import "./style.css"

const BorderCard = (props) => {

    let classes = "myBorderCon " + props.className
  return (
      <div className={classes}>{props.children}</div>
  )
}

export default BorderCard