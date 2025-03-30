import React from 'react'
import Hero from '../Hero/Hero'
import Menu from './Menu/Menu'
import FoodItem from '../FooodItem/FoodItem'

const Home = () => {
  return (
    <div className='home'>
     <Hero/>
      <Menu />
      
      <FoodItem/>
    </div>
  )
}

export default Home
