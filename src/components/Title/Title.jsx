import React from 'react'
import s from "./Title.module.sass"
const Title = ({text, level=2}) => {
  const Heading = `h${level}`

  return (
    <Heading className={s.title}>{text}</Heading>
  )
}

export default Title