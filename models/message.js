const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create MessSchema
const MessageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  mess: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Message Model
const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
