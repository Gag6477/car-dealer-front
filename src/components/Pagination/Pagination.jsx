import React from 'react'
import s from "./Pagination.module.sass"

const Pagination = () => {
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