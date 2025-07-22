import React from 'react'
import Container from '../Container/Container'
import s from "./Explore.module.sass"
import More from '../More/More'
import Title from '../Title/Title'
import VehicleCard from '../VehicleCard/VehicleCard'
import {LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'
import PageButton from '../pageButton/PageButton'


const Explore = () => {
    const pages = [1, 2, 3, 4]
    return (
        <section className={s.explore}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.top}>
                        <Title text="Explore All Vehicle" />
                        <More to='#' type='classic' text="View All" />
                    </div>
                    <div className={s.list}>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    </div>
                    
                </div>
            </Container>
        </section>
    )
}

export default Explore