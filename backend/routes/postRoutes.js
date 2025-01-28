// routes/postRoutes.js

const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const Post = require('../models/Post'); 
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

// Route to create a post
router.post('/', verifyToken, async (req, res) => {
  try {

    if (req.user.username !== process.env.ADMIN_USER_ID) { 
      return res.status(403).json({ message: 'Unauthorized action' });
    }
       
    const { category, title, subtitle, description, content, tags, image } = req.body;

    // Only allow authenticated users to create posts
    const post = new Post({
      userId: req.user.id, // Add user ID from the token
      category,
      title,
      subtitle,
      description,
      content,
      tags,
      image,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single post by ID
router.get('/:_id', async (req, res) => {
  try {
    const post = await Post.findById(req.params._id); // Fixed to use req.params._id
    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.status(200).json(post); // Respond with the found post
  } catch (error) {
    console.error('Error fetching post:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching the post.' });
  }
});


// **New Route** to get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Sort by createdAt (descending)
    res.json(posts);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});


module.exports = router;
