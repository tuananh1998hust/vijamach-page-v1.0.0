const validator = require("validator");

// @route    POST api/messages
// @desc     Validation Body Input
// @access   Public
module.exports = (req, res, next) => {
  const { name, email, phone } = req.body;

  let errors = [];

  if (!name || !email || !phone) {
    errors.push("Please Fill All The Fields");
  }

  if (name && email && phone) {
    if (
      validator.isEmpty(name.trim("")) ||
      validator.isEmpty(email.trim("")) ||
      validator.isEmpty(phone.trim(""))
    ) {
      errors.push("Please Fill All The Fields");
    }

    if (!validator.isEmail(email)) {
      errors.push("Email Is Invalid");
    }

    if (!validator.isLength(name, { min: 2 })) {
      errors.push("Name Is At Least 2 Characters");
    }
  }

  if (errors.length) {
    return res.status(400).json({ msg: errors });
  }

  next();
};
