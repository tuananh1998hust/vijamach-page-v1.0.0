const express = require("express");
const router = express.Router();

// Controller
const controllerAdmin = require("../controller/admin");
// Validation Body Input
const validationInput = require("../validation/adminLogin");

// @route    GET admin/login
// @desc     Get Admin Login Pages
// @access   Public
router.get("/login", controllerAdmin.getLogin);

// @route    POST admin/login
// @desc     POST Admin Login Pages/ Login To DashBoard
// @access   Public
router.post("/login", validationInput, controllerAdmin.postLogin);

// @route    GET admin/logout
// @desc     Get Log Out DashBoard
// @access   Public
router.get("/logout", controllerAdmin.getLogout);

module.exports = router;
