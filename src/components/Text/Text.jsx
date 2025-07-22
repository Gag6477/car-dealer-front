import React from 'react'
import s from "./Text.module.sass"

const Text = ({text}) => {
  return (
    <div className={s.text}>{text}</div>
  )
}

export default Text