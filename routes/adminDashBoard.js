const express = require("express");
const router = express.Router();

// AdminDashBoard Controller
const controllerAdminDashBoard = require("../controller/adminDashBoard");

// @route    GET admin/dashboard
// @desc     Get DashBoard Pages
// @access   Private
router.get("/", controllerAdminDashBoard.getDashBoard);

// @route    GET admin/dashboard/orders
// @desc     Get DashBoard Orders Pages
// @access   Private
router.get("/orders", controllerAdminDashBoard.getDashBoardOrders);

// @route    GET admin/dashboard/orders/search
// @desc     Search Orders By Customer
// @access   Private
router.get("/orders/search", controllerAdminDashBoard.getSearchDashBoardOrders);

// @route    GET admin/dashboard/messages
// @desc     Get DashBoard Messages Pages
// @access   Private
router.get("/messages", controllerAdminDashBoard.getDashBoardMessages);

// @route    GET admin/dashboard/messages/search
// @desc     Search Message By Customer
// @access   Private
router.get(
  "/messages/search",
  controllerAdminDashBoard.getSearchDashBoardMessages
);

// @route    GET admin/dashboard/products
// @desc     Get DashBoard Products Pages
// @access   Private
router.get("/products", controllerAdminDashBoard.getDashBoardProducts);

// @route    GET admin/dashboard/products/search
// @desc     Search Products By Name
// @access   Private
router.get(
  "/products/search",
  controllerAdminDashBoard.getSearchDashBoardProducts
);

module.exports = router;
