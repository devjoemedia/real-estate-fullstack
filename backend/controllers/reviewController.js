const Review = require("../models/Review");
const asyncHandler = require("express-async-handler");

// @method POST Request
// @desc Create reviews
const createReview = asyncHandler(async (req, res) => {
  const property = req.params.id;
  const user = req.user._id;

  const review = await Review.create({ user, property, ...req.body });

  if (!review) {
    res.status(404);
    throw new Error("could not create review");
  }

  res.status(200).json({
    status: "success",
    review,
  });
});

// @method GET Request
// @desc Get all reviews
const getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find().populate(["user", "property"]);

  if (!reviews) {
    res.status(404);
    throw new Error("no reviews found");
  }

  res.status(200).json({
    status: "success",
    length: reviews.length,
    reviews,
  });
});

// @method GET Request
// @desc Get a single review
const getReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    res.status(404);
    throw new Error("review not found");
  }

  res.status(200).json({
    status: "success",
    review,
  });
});

// @method PATCH Request
// @desc update a review information
const updateReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    res.status(404);
    throw new Error("invalid review");
  }

  await review.update(req.body);

  res.status(200).json({
    status: "success",
    review,
  });
});

// @method DELETE Request
// @desc delete a review
const deleteReview = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const review = await Review.findByIdAndDelete(id);

  if (!review) {
    res.status(404);
    throw new Error("could not delete review");
  }

  res.status(200).json({
    status: "success",
    reviewId: review._id,
  });
});

module.exports = {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
};
