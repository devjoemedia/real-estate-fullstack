const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createSendToken = (user, statusCode, res) => {
  let token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "30d" });

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password, user.password))) {
    res.status(404);
    throw new Error("invalid email or password");
  }

  createSendToken(user, 200, res);
});

const register = asyncHandler(async (req, res) => {
  const { name, email, role, photo, password } = req.body;

  const user = await User.create({ name, email, role, photo, password });

  if (!user) {
    throw new Error("there was an error");
  }

  createSendToken(user, 200, res);
});

module.exports = {
  login,
  register,
};
