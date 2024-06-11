const mongoose = require('mongoose');
const { commentSchema } = require('./comment');

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  username: { type: String, required: true },
  time: { type: String, required: true },
  avatar: { type: String, default: "" }, // Default avatar to an empty string
  tags: { type: [String], default: [] }, // Default to an empty array
  likes: { type: Number, default: 0 },
  comments: { type: [commentSchema], default: [] } // Default to an empty array
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
