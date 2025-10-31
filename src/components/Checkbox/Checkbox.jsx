import React from 'react'
import s from './Checkbox.module.sass'


const Checkbox = ({label}) => {
    return (
        <label className={s.check}>
            <input type="checkbox" className={s.input}/>
            <p className={s.text}>{label}</p>
        </label>
    )
}


export default Checkbox