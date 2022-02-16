const express = require("express");
const {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllReviews);
router
  .route("/:id")
  .get(getReview)
  .post(verifyToken, createReview)
  .patch(updateReview)
  .delete(deleteReview);

module.exports = router;
