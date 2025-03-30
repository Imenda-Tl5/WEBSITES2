import React, { useContext, useState } from "react";
import { food_list } from "../assets/assets";
import "./FoodItem.css";
import { FoodContext } from "../FoodContext";

const FoodItem = () => {
  const { addToCart, removeFromCart, cart,setActive,category } = useContext(FoodContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (item) => {
    setLoading(true);
    setError("");

    if (!cart[item._id]) {
      setError("Item not found in cart.");
      setLoading(false);
      return;
    }

    const url = "http://localhost:5001/add";
    const payload = {
      id: item._id,
      name: item.name,
      price: item.price,
      count: cart[item._id].count,
      category: item.category,
      image: item.image,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="food-items-container">

      {food_list.map((item,index)=>{
if(item.category===category){
  return(
    <div className="food-item" key={item._id}>
    <img src={item.image} alt={item.name} />
    <div className="details">
      <div className="top">
        <div className="left">
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p className="desc">{item.description.slice(0,50)}</p>
        </div>
        <div className="right">
          <h3>${item.price}</h3>
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => removeFromCart(item)} >
<span>-</span>
        </button>

        <h4>
          {cart[item._id] ? <span>{cart[item._id].count}</span> : "Add to cart"}
        </h4>
        <button onClick={() => addToCart(item)}><span>+</span> </button>
      </div>
      
      {error && <p className="error">{error}</p>}
    </div>
  </div>
  )
}else if(category==="all")
  return(
    <div className="food-item" key={item._id}>
    <img src={item.image} alt={item.name} />
    <div className="details">
      <div className="top">
        <div className="left">
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p className="desc">{item.description.slice(0,50)}</p>
        </div>
        <div className="right">
          <h3>${item.price}</h3>
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => removeFromCart(item)} disabled={!cart[item._id]}>
          <span onClick={()=>setActive("active")}>
       -
            </span>  
        </button>
        <h4>
          {cart[item._id] ? <span>{cart[item._id].count}</span> : "Add to cart"}
        </h4>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
      
      {error && <p className="error">{error}</p>}
    </div>
  </div>
  )
      })}
    </div>
  );
};

export default FoodItem;
