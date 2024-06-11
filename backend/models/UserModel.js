const mongoose = require('mongoose');
const { postSchema } = require('./post');
const { projectSchema } = require('./project');
const { certificationSchema } = require('./certification');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  course: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: Number, required: true },
  avatar: { type: String, default: "" },
  bio: { type: String, default: "" },
  skills: { type: [String], default: [] },
  connections: { type: Number, default: 0 },
  projects: { type: [projectSchema], default: [] },
  posts: { type: [postSchema], default: [] },
  certifications: { type: [certificationSchema], default: [] }, // Adding certifications
  likedPosts: { type: [Number], default: [] },
  likedProjects: { type: [Number], default: [] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
