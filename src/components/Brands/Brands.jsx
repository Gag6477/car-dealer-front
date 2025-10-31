import React from 'react'
import Container from '../Container/Container';
import More from '../More/More';
import Title from '../Title/Title';
import s from "./Brands.module.sass"
import benz from "../../assets/img/benz.jpg"


const brands = [
    { brand: benz, title: "Mercedes Benz" },
    { brand: benz, title: "Mercedes Benz" },
    { brand: benz, title: "Mercedes Benz" },
    { brand: benz, title: "Mercedes Benz" },
    { brand: benz, title: "Mercedes Benz" },
    { brand: benz, title: "Mercedes Benz" }
]

const BrandsItem = ({ brand, title }) => {
    return (
        <div className={s.item}>
            <img src={brand} alt=""/>
            <div className={s.title}>{title}</div>
        </div>
    )
}

const Brands = () => {
    return (
        <section className={s.main}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.top}>
                        <Title text="Explore Our Premium Brands" />
                        <More to='#' type='classic' text="Show All Brands" />
                    </div>
                    <div className={s.list}>
                            {brands.map((brand, i) =>
                                <BrandsItem key={i} brand={brand.brand} title={brand.title} />)}
                        </div>
                </div>
            </Container>
        </section>
    )
}

export default Brands