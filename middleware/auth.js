require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * Auth Middleware is used to verify the token
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const authMiddleware = (req, res, next) => {
  // get token from request headers
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    // verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized", reason: err.message });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

/**
 * Sales Agent Middleware is used to check if the user is sales agent
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const isSalesAgentMiddleware = (req, res, next) => {
  // check if user is sales agent
  if (
    req.user &&
    req.user.role &&
    req.user.role.toLowerCase() === "salesagent"
  ) {
    next();
  } else {
    res.status(403).json({
      message: "Forbidden: Only Sales Agents are allowed",
    });
  }
};

/**
 * Manager Middleware is used to check if the user is manager
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const isManagerMiddleware = (req, res, next) => {
  if (req.user && req.user.role && req.user.role.toLowerCase() === "manager") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Forbidden: Only Manager is allowed" });
  }
};
module.exports = {
  authMiddleware,
  isSalesAgentMiddleware,
  isManager
}