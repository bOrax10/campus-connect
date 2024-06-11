const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  post: { type: String, required: true },
  author: { type: String, required: true },
  avatar: { type: String, default: '' }, // Storing avatar as a URL or file path
  description: { type: String, required: true },
  postTime: { type: String, required: true }
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;
