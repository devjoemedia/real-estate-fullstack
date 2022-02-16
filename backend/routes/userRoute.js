const express = require("express");
const { login, register } = require("../controllers/authController");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// auth Routes
router.route("/login").post(login);
router.route("/register").post(register);

router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
