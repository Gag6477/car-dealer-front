import React from 'react'
import s from "./Textarea.module.sass"

const Textarea = ({ label }) => {
    return (
        <label className={s.label}>
            <textarea className={s.textarea}></textarea>
            <span className={s.span}>{label}</span>
        </label>
    )

}

export default Textarea