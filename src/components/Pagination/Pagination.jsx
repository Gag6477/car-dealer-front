import React from 'react'
import s from "./Pagination.module.sass"
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'
import PageButton from "../PageButton/PageButton"

const Pagination = () => {
    const pages = [
        1,
        2,
        3,
        4
    ]
    return (
        <div className={s.pagination}>
            <div className={s.arrow}><LiaAngleLeftSolid /></div>
            {
                pages.map(n => <PageButton number={n} active={n === 1} />)
            }
            <div className={s.arrow}><LiaAngleRightSolid /></div>
        </div>
    )
}

export default Pagination