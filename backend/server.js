//server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const blogRoutes = require('./routes/Blog');
const Post = require('./models/Post');
const authRoutes = require('./routes/auth')

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes); 
app.use('/api/blogs', blogRoutes);
const dbURI = process.env.MONGO_URI; 

// // Route to create a post
// app.post('/api/posts', async (req, res) => {
//   try {
//     const { title, content } = req.body; // Adjust based on your Post schema
//     const post = new Post({ title, content });
//     await post.save();
//     res.status(201).json(post); // Respond with the created post
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Route to get a single post by ID
// app.get('/api/posts/:id', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) return res.status(404).json({ message: 'Post not found' });
//     res.json(post); // Respond with the found post
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// MongoDB connection
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
