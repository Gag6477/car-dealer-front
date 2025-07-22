import React from 'react'
import {Link} from "react-router"
import s from "./More.module.sass"
import {BsArrowUpRight} from "react-icons/bs"
const More = ({ to, text, type }) => {
  return (
    <div className={`${s.more} ${s[type]}`}>
      <Link to={to}>
        {text}
      </Link>
      <BsArrowUpRight/>
    </div>
  )
}
export default More