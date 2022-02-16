const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a  name"],
    },
    email: {
      type: String,
      required: [true, "please enter email"],
      unique: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.comparePassword = async function (password, userPassword) {
  return await bcrypt.compare(password, userPassword);
};

module.exports = mongoose.model("User", userSchema);
