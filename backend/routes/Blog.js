// routes/Blog.js

const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const router = express.Router();

// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};

// Route to get all blogs
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.status(200).json(posts); // Respond with the list of posts
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching the posts.' });
  }
});

router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Post.find({ category: { $regex: new RegExp('^' + category + '$', 'i') } }); // Case-insensitive search

    res.json(blogs); // Return the filtered blogs
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.post('/', authenticate, (req, res) => {
  res.send("Blog created by authenticated user");
});

router.put('/:category', authenticate, (req, res) => {
  res.send("Blog updated by authenticated user");
});

router.delete('/:category', authenticate, (req, res) => {
  res.send("Blog deleted by authenticated user");
});

module.exports = router;
