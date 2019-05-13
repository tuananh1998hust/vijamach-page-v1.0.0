// Orders Model
const Order = require("../../models/orders");

// @route    GET api/orders
// @desc     Get All Orders List
// @access   Public
module.exports.getOrderList = (req, res) => {
  Order.find()
    .sort({ date: 1 })
    .then(orders => res.json(orders));
};

// @route    POST api/orders
// @desc     Create New Order
// @access   Public
module.exports.postOrderList = (req, res) => {
  const { name, email, phone, mess, carts } = req.body;

  const newOrder = {
    name,
    email,
    phone,
    mess,
    carts
  };

  newOrder.save().then(order => res.json(order));
};
