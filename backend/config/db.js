import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  try {
    console.log("mongo connection string", process.env.MONGODB_URI);
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // 1 code means exit with failure, 0 means success
  }
};
