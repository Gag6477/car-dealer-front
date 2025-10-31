import React from 'react'
import Container from '../Container/Container';
import Title from '../Title/Title';
import More from '../More/More';
import s from "./Team.module.sass"
import profile from "../../assets/img/Profile.jpg"

const items = [
    { img: profile, title: "Courtney Henry", path: "Development Manager" },
    { img: profile, title: "Courtney Henry", path: "Development Manager" },
    { img: profile, title: "Courtney Henry", path: "Development Manager" },
    { img: profile, title: "Courtney Henry", path: "Development Manager" },
]
const Item = ({ item }) => {
    return (
        <div className={s.item}>
            <div className={s.img}>
                <img src={item.img} alt="" />
            </div>
            <div className={s.title}>{item.title}</div>
            <div className={s.path}>{item.path}</div>
        </div>
    )
}
const Team = () => {
    return (
        <section className={s.team}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.top}>
                        <Title text="Our Team" />
                        <More to='#' type='classic' text="View All" />
                    </div>
                    <div className={s.list}>
                        {
                            items.map((item, i) => {
                                return <Item key={i} item={item} />
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Team