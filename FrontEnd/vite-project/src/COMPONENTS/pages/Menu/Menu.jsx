import React, { useContext, useState } from 'react'
import { menu_list } from '../../assets/assets'
import "./Menu.css"
import { FoodContext } from '../../FoodContext'

const Menu = () => {
const [menuActive,setMenuActive] = useState("all")
const {category, setCategory} = useContext(FoodContext)
  return (
    <div className='menu'>
<h1>
  <span>
  Our Menu of Delicous Foods
  </span>
  <button onClick={()=>setCategory("all")} className={`${category==="all"?"active":""}`}>All Foods</button>
</h1>
      <div className="menu-container">
        
{
  menu_list.map((item,index)=>{
    return(
      <div onClick={()=>setMenuActive(`${item.menu_name}`)} className={`menu-item ${menuActive===item.menu_name?"active":""}`} key={index}>
          <p>{item.menu_name}</p>
            <img onClick={()=>setCategory(`${item.menu_name}`)
      
          } src={item.menu_image} alt="menu_item_image" />
      </div>
    )
  })
}      
    </div>
    </div>

  )
}

export default Menu
