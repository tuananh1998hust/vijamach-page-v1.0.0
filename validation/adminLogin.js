const validator = require("validator");

// @route    POST admin/login
// @desc     POST Admin Login Pages/ Login To DashBoard
// @access   Public
module.exports = (req, res, next) => {
  const { username, password } = req.body;

  let errors = [];

  if (!username || !password) {
    errors.push("Please Fill All The Fields");
  }

  if (username && password) {
    if (
      validator.isEmpty(username.trim("")) ||
      validator.isEmpty(password.trim(""))
    ) {
      errors.push("Please Fill All The Fields");
    }

    if (!validator.isLength(username, { min: 2 })) {
      errors.push("UserName Is At Least 2 Characters");
    }
  }

  if (errors.length) {
    return res.render("admin/login", {
      errors: errors,
      username: username
    });
  }

  next();
};
