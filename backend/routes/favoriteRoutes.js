const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  getFavorites,
  addFavorite,
  deleteFavorite,
} = require("../controllers/favoriteController");

// GET all favorites (protected)
router.get("/", auth, getFavorites);

// ADD favorite (protected)
router.post("/", auth, addFavorite);

// DELETE a favorite by ID (protected)
router.delete("/:id", auth, deleteFavorite);

module.exports = router;
