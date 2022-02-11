const mongoose = require("mongoose");

const propertySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a  name"],
      min: 5,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      min: 20,
      max: 200,
    },
    price: {
      type: Number,
      required: [true, "please enter a price"],
    },
    bannerImage: {
      type: String,
    },
    images: {
      type: Array,
    },
    location: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
      city: {
        type: String,
        required: true,
      },
    },
    features: {
      type: Array,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// virtual populate
propertySchema.virtual("reviews", {
  ref: "Review",
  foreignField: "property",
  localField: "_id",
});

module.exports = mongoose.model("Property", propertySchema);
