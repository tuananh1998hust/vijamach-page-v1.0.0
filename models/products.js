const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create ProductSchema
const ProductSchema = new Schema({
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
  desc: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Product Model
const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
