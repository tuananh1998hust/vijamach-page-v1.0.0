// Order Model
const Order = require("../models/orders");
// Messenge Model
const Message = require("../models/messages");
// Product Model
const Product = require("../models/products");

// @route    GET admin/dashboard
// @desc     Get DashBoard Pages
// @access   Private
module.exports.getDashBoard = (req, res) => {
  res.render("admin/dashboard");
};

// @route    GET admin/dashboard/orders
// @desc     Get DashBoard Orders Pages
// @access   Private
module.exports.getDashBoardOrders = (req, res) => {
  Order.find()
    .sort({ date: 1 })
    .then(orders => res.render("admin/orders", { orders: orders }));
};

// @route    GET admin/dashboard/orders/search
// @desc     Search Orders By Customer
// @access   Private
module.exports.getSearchDashBoardOrders = (req, res) => {
  Order.find()
    .sort({ date: 1 })
    .then(orders =>
      res.render("admin/orders", {
        orders: orders.filter(
          order =>
            order.name
              .toLowerCase()
              .indexOf(req.query.customer.toLowerCase()) !== -1
        ),
        search: req.query.customer
      })
    );
};

// @route    GET admin/dashboard/messages
// @desc     Get DashBoard Messages Pages
// @access   Private
module.exports.getDashBoardMessages = (req, res) => {
  Message.find()
    .sort({ date: 1 })
    .then(messages => res.render("admin/messages", { messages: messages }));
};

// @route    GET admin/dashboard/messages/search
// @desc     Search Message By Customer
// @access   Private
module.exports.getSearchDashBoardMessages = (req, res) => {
  Message.find()
    .sort({ date: 1 })
    .then(messages =>
      res.render("admin/messages", {
        messages: messages.filter(
          message =>
            message.name
              .toLowerCase()
              .indexOf(req.query.customer.toLowerCase()) !== -1
        ),
        search: req.query.customer
      })
    );
};

// @route    GET admin/dashboard/products
// @desc     Get DashBoard Products Pages
// @access   Private
module.exports.getDashBoardProducts = (req, res) => {
  Product.find()
    .sort({ date: 1 })
    .then(products => res.render("admin/products", { products: products }));
};

// @route    GET admin/dashboard/products/search
// @desc     Search Products By Name
// @access   Private
module.exports.getSearchDashBoardProducts = (req, res) => {
  Product.find()
    .sort({ date: 1 })
    .then(products =>
      res.render("admin/products", {
        products: products.filter(
          product =>
            product.name
              .toLowerCase()
              .indexOf(req.query.product.toLowerCase()) !== -1
        ),
        search: req.query.product
      })
    );
};
