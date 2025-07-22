import React from 'react'
import s from "./PageButton.module.sass"

const PageButton = ({number, active=false}) => {
  return (
    <div className={`${s.number} ${active ? s.active : ""}`}>{number}</div>
  )
}

export default PageButton