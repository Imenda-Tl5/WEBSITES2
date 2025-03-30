import React, { useContext, useEffect,useState } from 'react'
import { food_list } from '../assets/assets'
import { FoodContext } from '../FoodContext'
import "./Cart.css"
import Checkout from '../stripe/CheckOut'
const Cart = () => {
  const {cart,deleteFood,removeFromCart,addToCart} = useContext(FoodContext)
  const {pay,setPay} = useContext(FoodContext)
  let list = Object.values(cart).map((item)=>item)
let Total = list.reduce((total,item)=>total+item.price*item.count,0) 
  return (
    <div>
        <table>
            <caption>Your Cart</caption>
            <thead>
                <tr>

               <th> Product</th>
               <th> Price</th>
               <th> QTY</th>
               <th> Total</th>
               </tr>

            </thead>
            <tbody>
{
      Object.values(cart).map((item,index)=>{
        return(
            <tr key={index}>
                <td className='item' >
                    <img src={item.image} alt="" />
                    <div className='item-info'>
                    <p onClick={()=>console.log(Total)}>
                    {item.name}

                    </p>
<p>
{item.category}    

</p>
<p>
{item.description}    

</p>
                    </div>
                    </td>
                <td>{item.price}</td>
                <td><button onClick={()=>removeFromCart(item)}>-</button>{item.count} <button onClick={()=>addToCart(item)}>+</button></td>
                <td >{item.count *item.price} <button onClick={()=>deleteFood(item)}>X</button></td>
            </tr>
        )
      })
}

            </tbody>
        </table>
       <div className="order">
        <div className="order-container">

        <h1>Order Summary</h1>
        <div>
            <h3><span>Sub Total: ${Total}</span> <span></span></h3>
            <h3><span> Shipping: $3</span> <span></span></h3>
        </div>
        <h1>Total: ${Total+3}</h1>
   <button onClick={()=>setPay(true)}>CheckOut</button>
       </div>
{
  pay?
  <Checkout/>
:<></>
}       
       </div>

    </div>
  )
}

export default Cart
