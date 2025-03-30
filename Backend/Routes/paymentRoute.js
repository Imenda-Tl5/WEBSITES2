import express from "express"
import Stripe from "stripe"
import dotenv from "dotenv"
const paymentRouter = express.Router()
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

paymentRouter.post('/stripe/create-payment-intent', async (req, res) => {
    try {
      const { amount, currency } = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount, 
        currency,
        automatic_payment_methods: { enabled: true },
      });
  
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Payment intent creation failed' });
    }
  })
paymentRouter.post("create-payment-session",async(req,res)=>{
    try {
        const {amount} = req.body
        const paymentIntent = new stripe.paymentIntents.create({
            amount,
            currency:"usd",
            payment_method_types:["card"],
        })
        return res.json({clientSecret:paymentIntent.client_secret})
    } catch (error) {
        console.log(error)  
        return  res.status(500).json({message:error.message})
    }
})


export default paymentRouter