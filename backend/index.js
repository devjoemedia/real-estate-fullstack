const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const propertyRoute = require("./routes/propertyRoute");
const connectDB = require("./config/db");
const cors = require("cors");

// Database Connection
connectDB();

const app = express();

// bodyParser middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/properties", propertyRoute);

// middleware
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log("Server started on port " + process.env.PORT)
);
