import React from 'react'
import {IoBookmarkOutline } from 'react-icons/io5'
import s from "./ActionLabel.module.sass"
const ActionLabel = ({type}) => {
    const types = {
        save: <IoBookmarkOutline/>,
    };

  return (
    <div className={s.icon}>
        {types[type]}
    </div>
  );
};

export default ActionLabel