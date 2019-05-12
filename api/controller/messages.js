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
