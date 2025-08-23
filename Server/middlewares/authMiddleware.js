const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access Denied: No Token Provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer TOKEN"

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified; // Attach admin info to request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid Token" });
  }
};

module.exports = authMiddleware;
