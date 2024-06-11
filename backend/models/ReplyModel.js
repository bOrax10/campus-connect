const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  author: { type: String, required: true },
  username: { type: String, required: true },
  time: { type: String, required: true },
  reply: { type: String, required: true },
  avatar: { type: String, default: "" } // Default avatar to an empty string
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = { replySchema, Reply };
