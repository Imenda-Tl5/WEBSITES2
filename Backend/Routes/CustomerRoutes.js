import express from "express";
import bcrypt from "bcrypt"
import userModel from "../Models/CustomerModel.js";
import jwt from "jsonwebtoken"
const customerRouter = express.Router();


customerRouter.post("/register", async (req, res) => {
  try {
    const { email, username, password }=req.body;
    const hashed_password = await bcrypt.hash(password, 10);
    const user = new userModel({
    username:username,
    password:hashed_password,
    email:email    
    });
    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
customerRouter.get("/login",async(req,res)=>{
  try {
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user) return res.status(400).json({message:"user not fonud.Please give the email you logged in with"})
    const match = bcrypt.compare(password,user.password)
  if(!match) return res.status(400).json({message:"please give the right password"})
    const token = jwt.sign({id:user._id},SECRET_KEY,{expiresIn:"1h"})
    return res.json({token,userId:user._id,userName:user.username})  
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:error.message})
  }
})

export default customerRouter

