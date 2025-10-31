import React from 'react'
import Title from '../Title/Title'
import { FaCar } from 'react-icons/fa6'
import Container from '../Container/Container'
import s from "./Categories.module.sass"
import More from '../More/More'
import CategoryItem from '../CategoryItems/CategoryItem'

const categories = [
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" }
]


const Categories = () => {
    return (
        <section>
            <div className={s.main}>
                <Container>
                    <div className={s.wrap}>
                        <div className={s.top}>
                            <Title text="Browse By Type" />
                            <More to='#' type='classic' text="View All" />
                        </div>

                        <div className={s.list}>
                            {categories.map((cat, i) =>
                                <CategoryItem key={i} icon={cat.icon} title={cat.title} />)}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Categories