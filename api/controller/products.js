// Product Model
const Product = require("../../models/products");

// @route    GET api/products
// @desc     Get All Products
// @access   Public
module.exports.getProducts = (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products));
};

// @route    POST api/products
// @desc     Create New Products
// @access   Public
module.exports.postProducts = (req, res) => {
  const { types_product, name, price, imgUrl, desc, count } = req.body;

  const newProduct = new Product({
    types_product,
    name,
    price,
    imgUrl,
    desc,
    count
  });

  // Save to DB
  newProduct.save().then(product => res.json(product));
};
