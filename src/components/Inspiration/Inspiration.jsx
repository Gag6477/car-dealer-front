import React from 'react'
import Container from '../Container/Container'
import s from "./Inspiration.module.sass"
import Title from '../Title/Title'

const items = [
    "Automatics Cars",
    "SUVs",
    "Electrics Cars",
    "New in Stock",
    "Petrol",
    "Diesel"
]

const Inspiration = () => {
    return (
        <section className={s.main}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.top}>
                        <Title text="Need Some Inspiration?" />
                    </div>
                    <div className={s.list}>
                        {items.map((item, index) => {
                            return <div key={index} className={s.item}>{item}</div>
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Inspiration