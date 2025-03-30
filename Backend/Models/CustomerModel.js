import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    passWord:{type:String,required:true}
})

const userModel = await mongoose.model("Customer",customerSchema)
export default userModel