const asyncHandler = require("express-async-handler");
const Property = require("../models/Property");
const Review = require("../models/Review");

const webhook = asyncHandler(async (req, res, next) => {
  console.log("Webhook server accessed");

  next();
});

// @method GET Request
// @desc Get all properties
const getProperties = asyncHandler(async (req, res) => {
  const properties = req.query.limit
    ? Property.find().limit(req.query.limit).populate("reviews")
    : await Property.find().populate("reviews");

  res.status(200).json({
    status: "success",
    length: properties.length,
    properties,
  });
});

// @method GET Request
// @desc Get single property
const getProperty = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const property = await Property.findById(id).populate("reviews");

  if (!property) {
    throw new Error(`Property not found`);
  }

  res.status(200).json({
    status: "success",
    property,
  });
});

// @method POST Request
// @desc Create new property
const createProperty = asyncHandler(async (req, res) => {
  const { name, price, description } = req.body;

  const property = await Property.create(req.body);

  if (!property) throw new Error("information could not be saved");

  res.status(200).json({
    status: "success",
    property,
  });
});

// @method PATCH Request
// @desc update property details
const updateProperty = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const updatedProperty = await Property.findByIdAndUpdate(id, req.body);

  if (!updatedProperty) throw new Error("property could not be updated");

  res.status(200).json({
    status: "success",
    property: updatedProperty,
  });
});

// @method DELETE Request
// @desc Delete a property
const deleteProperty = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const property = await Property.findByIdAndDelete(id);

  if (!property) throw new Error("property could not be deleted");

  res.status(200).json({
    status: "success",
    property,
  });
});

module.exports = {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  webhook,
};
