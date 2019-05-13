const express = require("express");
const router = express.Router();

// Orders Controller
const controllerOrders = require("../controller/orders");
// Validate Messages
const validateMessages = require("../validation/messages");

// @route    GET api/orders
// @desc     Get All Orders List
// @access   Public
router.get("/", controllerOrders.getOrderList);

// @route    POST api/orders
// @desc     Create New Order
// @access   Public
router.post("/", validateMessages, controllerOrders.postOrderList);

module.exports = router;
