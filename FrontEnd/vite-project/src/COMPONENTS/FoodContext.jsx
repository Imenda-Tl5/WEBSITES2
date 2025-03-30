import React, { createContext, useState } from "react";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [login, setLogin] = useState("not_logged_in");
  const [category, setCategory] = useState("all");
  const [pay,setPay] = useState(false);
  
  const [active,setActive] = useState("not_active")
  // Load cart from local storage on first render
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const addToCart = (foodItem) => {
    const updatedCart = { ...cart };

    if (updatedCart[foodItem._id]) {
      updatedCart[foodItem._id].count += 1;
    } else {
      updatedCart[foodItem._id] = { 
        ...foodItem, 
        count: 1 
      };
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
  };
const deleteFood = (foodItem)=>{
const updatedCart ={...cart}
if(updatedCart[foodItem._id]){
  delete updatedCart[foodItem._id]
}
setCart(updatedCart)

}
  const removeFromCart = (foodItem) => {
    const updatedCart = { ...cart };

    if (updatedCart[foodItem._id]) {
      updatedCart[foodItem._id].count -= 1;
      if (updatedCart[foodItem._id].count <= 0) {
        delete updatedCart[foodItem._id];
      }
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cart,
    setCart,
    login,
    setLogin,
    category,
    setCategory,
   active,
   setActive,
   deleteFood,
   pay,
   setPay
  };

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
