const User = require("../models/User");

// GET all favorites for logged-in user
exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json(user.favorites || []);
  } catch (err) {
    console.error("Get Favorites Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ADD a favorite city
exports.addFavorite = async (req, res) => {
  try {
    const { city, country } = req.body;

    if (!city)
      return res.status(400).json({ message: "City is required" });

    const user = await User.findById(req.user.id);

    // Prevent duplicates
    const exists = user.favorites.find(
      (fav) => fav.city.toLowerCase() === city.toLowerCase()
    );

    if (exists) {
      return res.status(400).json({ message: "City already saved" });
    }

    user.favorites.push({ city, country });
    await user.save();

    res.status(201).json(user.favorites);
  } catch (err) {
    console.error("Add Favorite Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE a favorite
exports.deleteFavorite = async (req, res) => {
  try {
    const favoriteId = req.params.id;
    const user = await User.findById(req.user.id);

    user.favorites = user.favorites.filter(
      (fav) => fav._id.toString() !== favoriteId
    );

    await user.save();

    res.json(user.favorites);
  } catch (err) {
    console.error("Delete Favorite Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
