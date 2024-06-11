const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, default: "" }, // Storing image path or URL
  source: { type: String, required: true },
  date: { type: Date, required: true },
  tags: { type: [String], default: [] }
});

const Certification = mongoose.model('Certification', certificationSchema);

module.exports = { certificationSchema, Certification };
