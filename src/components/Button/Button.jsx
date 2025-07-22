import React from 'react'
import s from "./Button.module.sass"
const Button = ({ 
    type = 'classic', 
    rounded = "normal", 
    fill=true,
    dir = "ltr", 
    text, 
    icon = null 
}) => {

    return (
        <button className={`
         ${s.button}
         ${s[type]} 
         ${s[rounded]} 
         ${s[dir]}
         ${fill ? s.fill : ""}
         `} >
            {icon}
            <span>{text}</span>
        </button >
    )
}

export default Button