import React from 'react'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import s from "./Arrow.module.sass"

const Arrow = ({dir}) => {
    const icons = {
         right: <LiaAngleRightSolid/>,
         left: <LiaAngleLeftSolid/>
        }
  return (
    <div>
        <div className={`${s.arrow} ${s[dir]}`}>{icons[dir]}</div>
    </div>
  )
}

export default Arrow