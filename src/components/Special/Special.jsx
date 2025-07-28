import React from 'react'
import s from "./Special.module.sass"
import Container from '../Container/Container'
import Title from '../Title/Title'
import More from '../More/More'
import VehicleCard from '../VehicleCard/VehicleCard'

const Special = () => {
  return (
    <section className={s.specials}>
        <Container>
            <div className={s.wrap}>
                <div className={s.top}>
                        <Title text="Specials" />
                        <More to='#' type='classic' text="View All" />
                    </div>
                    <div className={s.list}>
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

export default Special