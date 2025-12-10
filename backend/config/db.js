import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(process.env.mongodbURP)
    .then(()=>{console.log("DB connected")})
}

