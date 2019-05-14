const jwt = require("jsonwebtoken");

// Admin Model
const Admin = require("../models/admin");
// keys
const keys = require("../config/keys");

const auth = (req, res, next) => {
  const token = req.signedCookies.token;

  // Check Token
  if (!token) {
    return res.redirect("/admin/login");
  }

  try {
    // Verify Token
    const decoded = jwt.verify(token, keys.secretOrKey);

    // Add user from payload
    req.user = decoded;

    next();
  } catch (e) {
    return res.redirect("/admin/login", { errors: ["Token is not valid"] });
  }
};

module.exports = auth;
