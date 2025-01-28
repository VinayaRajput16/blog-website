// /backend/models/Post.js

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  category: { type: String}, // Detailed content if needed
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }, // Detailed content if needed
  tags: [{ type: String }], // Array of strings for tags
  image: { type: String }, // URL for the image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
