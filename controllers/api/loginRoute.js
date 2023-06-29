// housekeeping 
const express = require('express');
const router = express.Router();
const { User } = require('../../models'); // import User model
const withAuth = require('../../utils/auth');

// login existing user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      // Add a method in your User model to check the password
      if (user && await user.checkPassword(password)) {
        req.session.user = user;
        return res.status(200).json({ message: 'User logged in successfully' });
      } else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred', error });
    }
  });

// signup new user
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    if (user) {
      req.session.user = user;
      return res.status(201).json({ message: 'User registered successfully' });
    } else {
      return res.status(400).json({ message: 'Could not register user' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error });
  }
});

// logout
router.post('/logout', (req, res) => {
    try {
        req.session.user = null;
        return res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error });
    }
});

module.exports = router;
