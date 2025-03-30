import React from 'react'
import "./Hero.css"
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="company-info">
        <div className='home-header'>
        <h1>Welcome to Foo<span>DS</span></h1>
        <div>
        <h3> <span>The home your favourite cuisines and meals </span></h3>
        <h3>We strive to leave your bellies full and faces smilling</h3>
        </div>
        </div>
        <img src={assets.salmon_rice} alt="" />
      </div>
    </div>
  )
}

export default Hero
