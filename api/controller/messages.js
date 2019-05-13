const nodemailer = require("nodemailer");

// Message Model
const Message = require("../../models/messages");

// @route    GET api/messages
// @desc     Get All Messages
// @access   Public
module.exports.getMessages = (req, res) => {
  Message.find()
    .sort({ date: 1 })
    .then(messages => res.json(messages));
};

// @route    POST api/messages
// @desc     Add New Messages Or Update Messages
// @access   Public
module.exports.postMessages = (req, res) => {
  const { name, email, phone, mess } = req.body;

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

  Message.findOne({ email }).then(user => {
    if (!user) {
      // Create New Message
      const newMessage = new Message({
        name,
        email,
        phone,
        mess
      });

      newMessage.save().then(message => res.json(message));
    } else {
      // Update Messages
      if (mess) {
        user.mess.push(mess);
      }

      user.save().then(updateMess => res.json(updateMess));
    }
  });
};
