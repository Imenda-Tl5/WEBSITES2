import express from "express"
import FoodModel from "../Models/FoodModel.js"
const FoodRouter = express.Router()
FoodRouter.post("/add",async(req,res)=>{
    const {name,price,category,count} = req.body
  if(!name|| !count || !price || !category){
    return res.status(400).json({message:"must provide all necessary fields ie name,price, count and category"})
  }
    const Food = await FoodModel.create({
        name:name,
        price:price,
        count:count,
        category:category
    }) 
    return res.status(201).json({message:"food Added",data:Food})
})
FoodRouter.get("/get", async (req, res) => {
    try {
      const foodList = await FoodModel.find({});
      return res.json({ data: foodList });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error occurred while fetching food items",
        error: error.message,
      });
    }
  })
  FoodRouter.get("/get", async (req, res) => {
    try {
      const foodList = await FoodModel.find({});
      return res.json({ data: foodList });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error occurred while fetching food items",
        error: error.message,
      });
    }
  })
  FoodRouter.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, category, price } = req.body;
  
      if (!name && !category && !price) {
        return res.status(400).json({
          message: "At least one field (name, category, price) must be provided to update",
        });
      }
  
      const updatedFood = await FoodModel.findByIdAndUpdate(
        id,
        { $set: { name, category, price } },
        { new: true }
      );
  
      if (!updatedFood) {
        return res.status(404).json({ message: "Food item not found" });
      }
  
      return res.json({
        message: "Food item updated successfully",
        data: updatedFood,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error occurred while updating the food item",
        error: error.message,
      });
    }
  });
export default FoodRouter