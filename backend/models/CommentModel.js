const mongoose = require('mongoose');
const { replySchema } = require('./reply');

const commentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  author: { type: String, required: true },
  username: { type: String, required: true },
  time: { type: String, required: true },
  comment: { type: String, required: true },
  avatar: { type: String, default: "" }, // Default avatar to an empty string
  replies: { type: [replySchema], default: [] } // Using the reply schema for replies, default to an empty array
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { commentSchema, Comment };
