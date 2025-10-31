import React from 'react'
import s from './Listing.module.sass'
import FilterBox from '../../components/FilterBox/FilterBox';
import Container from '../../components/Container/Container';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Title from '../../components/Title/Title';
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import Pagination from "../../components/Pagination/Pagination";

const Listing = () => {
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
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                </div>
                <Pagination/>
            </main>
            </div>
        </Container>
    )
};


export default Listing