const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin Model
const Admin = require("../models/admin");
// keys
const keys = require("../config/keys");

// @route    GET admin/login
// @desc     Get Admin Login Pages
// @access   Public
module.exports.getLogin = (req, res) => {
  res.render("admin/login");
};

// @route    POST admin/login
// @desc     POST Admin Login Pages/ Login To DashBoard
// @access   Public
module.exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  const errors = [];

  Admin.findOne({ username }).then(user => {
    if (!user) {
      // Not User
      errors.push("User Not Found");
      return res.render("admin/login", {
        errors: errors,
        username: username
      });
    }

    // Compare Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        // Not Matched Password
        errors.push("Incorrect Password");
        return res.render("admin/login", {
          errors: errors,
          username: username
        });
      }

      // Match Password
      jwt.sign(
        { id: user.id },
        keys.secretOrKey,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;

          res.cookie("token", token, { signed: true });

          res.redirect("/admin/dashboard");
        }
      );
    });
  });
};

// @route    GET admin/logout
// @desc     Get Log Out DashBoard
// @access   Public
module.exports.getLogout = (req, res) => {
  Cookies.remove("token");

  res.redirect("/admin/login");
};
