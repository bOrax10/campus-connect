const mongoose = require('mongoose');
const { commentSchema } = require('./comment');

const postSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  author: { type: String, required: true },
  username: { type: String, required: true },
  time: { type: String, required: true },
  avatar: { type: String, default: "" }, // Default avatar to an empty string
  content: { type: String, required: true },
  tags: { type: [String], default: [] }, // Default to an empty array
  likes: { type: Number, default: 0 },
  comments: { type: [commentSchema], default: [] } // Default to an empty array
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
