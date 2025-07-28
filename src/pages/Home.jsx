import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import Explore from '../components/Explore/Explore'
import Presentation from '../components/Presentation/Presentation'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Special from '../components/Special/Special'
import Reviews from '../components/Reviews/Reviews'
import Team from '../components/Team/Team'
import Inspiration from '../components/Inspiration/Inspiration'
import Brands from '../components/Brands/Brands'
import FindOutMore from '../components/FindOutMore/FindOutMore'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Explore/>
      <Presentation/>
      <WhyChooseUs/>
      <Special/>
      <Reviews/>
      <Team/>
      <Inspiration/>
      <Brands/>
      <FindOutMore/>
    </div>
    
  )
}

export default Home