import React from 'react'
import s from './Input.module.sass'


const Input = ({label, type}) => {
    return (
        <label className={s.label}>
            <input type={type} className={s.input} />
            <span className={s.span}>{label}</span>
        </label>
    )
}


export default Input