const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.KEY);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Validation error." });
  }
};
