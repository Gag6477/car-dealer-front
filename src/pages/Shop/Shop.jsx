import React from 'react'
import s from './Shop.module.sass'
import Container from '../../components/Container/Container'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Title from '../../components/Title/Title'
import FilterBox from '../../components/FilterBox/FilterBox'
import VehicleCard from '../../components/VehicleCard/VehicleCard'
import Pagination from '../../components/Pagination/Pagination'
import AddToCart from '../../components/AddToCart/AddToCart'


const Shop = () => {
    return (
         <Container>
            <BreadCrumbs />
            <div className={s.all}>
            <header className={s.header}>
                <Title text='Shop' />
            </header>
            <aside className={s.aside}>
                <FilterBox title="Category"></FilterBox>
                <FilterBox title="Fuel"></FilterBox>
                <FilterBox title="Type"></FilterBox>
            </aside>
            <main className={s.main}>
                <div className={s.top}>
                    <div className={s.results}>Showing 1 – 12 of 15 results</div>
                    <div className={s.sortby}>
                        <span>Sort by:</span>
                        <select value={"Default"}>
                            <option value="default">Default</option>
                        </select>
                    </div>
                </div>
                <div className={s.list}>
                    <AddToCart/>
                </div>
                <Pagination/>
            </main>
            </div>
        </Container>
    )
}


export default Shop