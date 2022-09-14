import config from "../config/index.js";
import jwt from "jsonwebtoken";

module.exports = (req, res, next) => {
  try {
    const token = req.headers.auth_token;
    const decoded = jwt.verify(token, config.JWT_TOKEN);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
