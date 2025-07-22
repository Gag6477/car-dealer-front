import React from 'react'
import s from "./CardLabel.module.sass"
const CardLabel = ({type, text}) => {
  return (
    <div className={`${s.label} ${s[type]}`}>{text}</div>
  )
}

export default CardLabel