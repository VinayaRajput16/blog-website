// backend/routes/auth.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

// Environment variables for admin credentials
const adminUsername = process.env.ADMIN_USER_ID;
const adminPassword = process.env.ADMIN_PASSWORD; 

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the entered username matches the admin username
  if (username !== adminUsername) {
    return res.status(404).send("User not found");
  }

  // If password is hashed in .env, compare using bcrypt
  const match = await bcrypt.compare(password, adminPassword);
  
  if (match) {
    // Password matches, generate a JWT token
    const token = jwt.sign({ username: adminUsername }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).send("Invalid credentials");
  }
});

module.exports = router;
