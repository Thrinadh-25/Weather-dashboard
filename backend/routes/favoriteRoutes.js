const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get Favorites
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add Favorite
router.post('/', authMiddleware, async (req, res) => {
  const { city } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    if (!user.favorites.includes(city)) {
      user.favorites.push(city);
      await user.save();
    }
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Remove Favorite
router.delete('/:city', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.favorites = user.favorites.filter(city => city !== req.params.city);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
