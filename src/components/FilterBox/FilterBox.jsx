import React, { Children } from 'react'
import s from "./FilterBox.module.sass"

const FilterBox = ({title, children}) => {
  return (
    <div className={s.main}>
        <h3 className={s.title}>{title}</h3>
        {children}
    </div>
  );
};

export default FilterBox