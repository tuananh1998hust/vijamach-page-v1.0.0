const express = require("express");
const router = express.Router();

// Messages Controller
const controllerMessages = require("../controller/messages");
// Validate Messages
const validateMessages = require("../validation/messages");

// @route    GET api/messages
// @desc     Get All Messages
// @access   Public
router.get("/", controllerMessages.getMessages);

// @route    POST api/messages
// @desc     Add New Messages
// @access   Public
router.post("/", validateMessages, controllerMessages.postMessages);

module.exports = router;
