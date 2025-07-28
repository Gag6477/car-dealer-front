import React from 'react'
import s from './WhyChooseUs.module.sass'
import Container from '../Container/Container'
import Title from '../Title/Title'
import { FaReact } from 'react-icons/fa6'

const items = [
    { title: "Special Financing Offers", subtitle: "Our stress-free finance department that can find financial solutions to save you money.", icon: <FaReact /> },
    { title: "Special Financing Offers", subtitle: "Our stress-free finance department that can find financial solutions to save you money.", icon: <FaReact /> },
    { title: "Special Financing Offers", subtitle: "Our stress-free finance department that can find financial solutions to save you money.", icon: <FaReact /> },
    { title: "Special Financing Offers", subtitle: "Our stress-free finance department that can find financial solutions to save you money.", icon: <FaReact /> },
]
const Item = ({item}) => {
    return(
        <div className={s.item}>
            <div className={s.icon}>{item.icon}</div>
            <div className={s.title}>{item.title}</div>
            <div className={s.subtitle}>{item.subtitle}</div>
        </div>
    )
}
const WhyChooseUs = () => {
    return (
        <div className={s.main}>
            <Container>
                <div className={s.wrap}>
                    <Title text="Why Choose Us?" />
                    <div className={s.list}>
                        {
                            items.map((item, i) => {
                                return <Item item={item}/>
                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhyChooseUs