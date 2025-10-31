import React from 'react'
import s from './BreadCrumbs.module.sass'
import { Link, useLocation } from 'react-router'
import { toCapitalCase } from '../../utils/toCapitalCase'


const BreadCrumbs = () => {
    const {pathname} = useLocation()
    return (
        <div className={s.main}>
            <div className={s.breadcrumbs}>
                <Link to="/">Home</Link>
                {
                pathname
                .split("/")
                .slice(1)
                .map((link, i, arr) => {
                    if(i !== arr.length - 1){
                        return <Link key={i} to={`${link}`}>{toCapitalCase(`/${link}`)}</Link>
                }else{
                    return <span className={s.last}>/{toCapitalCase(link)}</span>
                }
})}
            </div>
        </div>
    )
}


export default BreadCrumbs