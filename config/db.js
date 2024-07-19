const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE CONNECTED".bgGreen);
  } catch (error) {
    console.log("DATABASE CONNECTION FAILED!".bgRed);
  }
};

module.exports = connectDB;
