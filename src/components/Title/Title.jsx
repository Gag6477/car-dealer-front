import React from 'react'
import s from "./Title.module.sass"
const Title = ({text}) => {
  return (
    <div className={s.title}>
      {text}
    </div>
  )
}

export default Title