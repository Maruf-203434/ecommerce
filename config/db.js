import mongoose from "mongoose";

export const connectDB  = async () =>{
    await mongoose.connect('mongodb+srv://marufcoding:user123@cluster0.r7skn.mongodb.net/Evara?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
}