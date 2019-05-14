const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// AdminSchema
const AdminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Admin Model
const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
