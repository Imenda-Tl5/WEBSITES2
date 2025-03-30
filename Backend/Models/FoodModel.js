import mongoose from "mongoose"
const FoodSchema = mongoose.Schema({
    name:{
        type:String,required:true
    },
    category:{
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    count:{
        type:Number,required:true
    }
})

const FoodModel = await mongoose.model("Food",FoodSchema)
export default FoodModel