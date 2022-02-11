const express = require("express");

const {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");
const { create } = require("../models/Property");

const router = express.Router();

router.route("/").get(getProperties).post(createProperty);

router
  .route("/:id")
  .get(getProperty)
  .patch(updateProperty)
  .delete(deleteProperty);

module.exports = router;
