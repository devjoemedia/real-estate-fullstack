const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// verify if user is authorized
const verifyToken = asyncHandler(async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;

      next();
    }
  } catch (err) {
    res.status(401);
    throw new Error("not authorized");
  }

  if (!token) {
    res.status(401);
    throw new Error("not authorized, invalid token");
  }
});

module.exports = {
  verifyToken,
};
