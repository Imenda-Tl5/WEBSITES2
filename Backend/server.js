import express from "express"
import FoodRouter from "./Routes/FoodRouetr.js"
import { connectToDB } from "./config/DB.js"
import cors from "cors"
import dotenv from "dotenv"
import paymentRouter from "./Routes/paymentRoute.js"
import customerRouter from "./Routes/CustomerRoutes.js"
import Stripe from "stripe"
const app = express()
dotenv.config()
app.use(express.json())

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, { apiVersion: '2025-01-27.acacia' });

const PORT = process.env.PORT || 4000
app.use("/api",FoodRouter)
app.use("/api",paymentRouter)
app.use("/api",customerRouter)
app.use(cors())
connectToDB()
app.
listen(PORT,()=>console.log(`running on PORT  ${PORT}`))