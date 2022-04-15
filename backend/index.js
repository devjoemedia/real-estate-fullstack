const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const propertyRoute = require("./routes/propertyRoute");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// Database Connection
connectDB();

const app = express();

// bodyParser middleware
app.use(express.json());

app.use(cors());

// app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Routes
app.use("/api/properties", propertyRoute);
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);

// middleware
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log("Server started on port " + process.env.PORT)
);
