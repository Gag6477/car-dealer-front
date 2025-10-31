import React from 'react'
import s from "./CardLabel.module.sass"
const CardLabel = ({type, text, icon}) => {
  return (
    <div className={`${s.label} ${s[type]}`}>
      {icon ? icon : null}
    <span>{text}</span>
    </div>
  )
}

export default CardLabel