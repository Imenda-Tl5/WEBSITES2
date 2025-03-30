import mongoose from "mongoose"

export const PORT = process.env.PORT|| 4000

const uri = "mongodb+srv://drnawajr2:drimendatl4@cluster0.2etww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectToDB = async()=>{
  mongoose.connect(uri)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error(err));

}


