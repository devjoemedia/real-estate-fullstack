const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @method GET Request
// @desc Get all users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (!users) {
    res.status(404);
    throw new Error("no users found");
  }

  res.status(200).json({
    status: "success",
    length: users.length,
    users,
  });
});

// @method GET Request
// @desc Get a single user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

// @method PATCH Request
// @desc update a users information
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("invalid user");
  }

  await user.update(req.body);

  res.status(200).json({
    status: "success",
    user,
  });
});

// @method DELETE Request
// @desc delete a user
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    res.status(404);
    throw new Error("could not delete user");
  }

  res.status(200).json({
    status: "success",
    userId: user._id,
  });
});

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
