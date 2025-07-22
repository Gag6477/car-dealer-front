import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import Explore from '../components/Explore/Explore'
import Presentation from '../components/Presentation/Presentation'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Explore/>
      <Presentation/>
    </div>
    
  )
}

export default Home