const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection established");
  } catch (err) {
    throw new Error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
