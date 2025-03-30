import React, { useContext, useState } from 'react'
import { FoodContext } from './COMPONENTS/FoodContext'
import About from './COMPONENTS/pages/About/About'
import Menu from './COMPONENTS/pages/Menu/Menu'
import Navbar from './COMPONENTS/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './COMPONENTS/pages/Home'
import Cart from './COMPONENTS/cart/Cart'
import LoginPopUp from './COMPONENTS/LoginPopUp/loginPopUp'
import Footer from './COMPONENTS/Footer/Footer'

const App = () => {
  const {login} = useContext(FoodContext)
  return (
    <div>
<Navbar/>
{
  login==="not_logged_in"?<></>:
<LoginPopUp/>

}
<Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
 <Footer/>
    </div>
  )
}

export default App
