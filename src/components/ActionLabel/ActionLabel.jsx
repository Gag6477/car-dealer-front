import React from 'react'
import {IoBookmarkOutline, IoGitCompareOutline, IoShareOutline } from 'react-icons/io5'
import s from "./ActionLabel.module.sass"
const ActionLabel = ({type}) => {
    const types = {
        save: <IoBookmarkOutline/>,
        share: <IoShareOutline/>,
        sheet: <IoGitCompareOutline/>
    };

  return (
    <div className={s.icon}>
        {types[type]}
    </div>
  );
};

export default ActionLabel