const nodemailer = require("nodemailer");

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

  const transporter = nodemailer.createTransport({
    // Config Mail Server
    service: "gmail",
    auth: {
      user: "vijamach.info@gmail.com",
      pass: "vijamachinfo1998"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const messOpitons = {
    // Message Option
    from: "vijamach.info@gmail.com",
    to: `${email}`,
    subject: "Vijamach Support ✔",
    text: "Thank you for send email to us. We will respond as soon as possible"
  };

  // Send  Mail
  transporter
    .sendMail(messOpitons)
    .then(info => {
      console.log(info);
      console.log(`One Message Is Send To ${email}`);
    })
    .catch(err => console.log(err));

  const newOrder = new Order({
    name,
    email,
    phone,
    mess,
    carts
  });

  newOrder.save().then(order => res.json(order));
};
