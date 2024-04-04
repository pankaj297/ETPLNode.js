
  import mongoose from "mongoose";
  import dotenv from "dotenv";

  // Load environment variables from .env file
  dotenv.config();

  // MongoDB connection URI
  const uri = process.env.MONGOURL || "mongodb://127.0.0.1:27017/studentdata";

  

  // Connect to MongoDB
  mongoose.connect(uri)
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
      console.error(`Failed to connect to MongoDB: ${err}`);
    });
