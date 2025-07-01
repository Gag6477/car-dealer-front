import React from 'react'
import Title from '../Title/Title'
import { FaCar } from 'react-icons/fa6'
import Container from '../Container/Container'
import s from "./Categories.module.sass"
import More from '../More/More'

const categories = [
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" },
    { icon: <FaCar />, title: "Car" }
]

const CategoriesItem = ({ icon, title }) => {
return (
    <div className={s.item}>
        {icon}
        <div className={s.title}>{title}</div>
    </div>
)
}
    const Categories = () => {
        return (
            <div className={s.main}>
                <Container>
                    <div className={s.wrap}>
                        <div className={s.top}>
                        <Title text="Browse By Type"/>
                        <More outlined={false} type='classic'/>
                        </div>
                        
                        <div className={s.list}>
                            {categories.map((cat) => <CategoriesItem icon={cat.icon} title={cat.title}/>)}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    export default Categories