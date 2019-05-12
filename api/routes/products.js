const express = require("express");
const router = express();

// Products Controller
const controllerProducts = require("../controller/products");

// @route    GET api/products
// @desc     Get All Products
// @access   Public
router.get("/", controllerProducts.getProducts);

// @route    GET api/products/:id
// @desc     Get Products By Id
// @access   Public
router.get("/:id", controllerProducts.getDetailProduct);

// @route    POST api/products
// @desc     Create New Products
// @access   Public
router.post("/", controllerProducts.postProducts);

module.exports = router;
