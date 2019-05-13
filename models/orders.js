const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create OrderSchema
const OrderSchema = new Schema({
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
    type: String,
    required: true
  },
  carts: {
    type: [
      {
        types_product: {
          type: Number,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        imgUrl: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Order Model
const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
