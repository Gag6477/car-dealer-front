import React from 'react'
import s from "./CategoryItem.module.sass"

const CategoryItem = ({icon, title}) => {
  return (
    <div className={s.item}>
      <div className={s.icon}>{icon}</div>
      <div className={s.title}>{title}</div>
    </div>
  )
}

export default CategoryItem