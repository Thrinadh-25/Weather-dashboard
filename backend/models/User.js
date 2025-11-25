const mongoose = require("mongoose");

// Favorite city schema (each saved city)
const favoriteSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// User schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [favoriteSchema]  // array of favorites
  },
  { timestamps: true }
);

// Export model
module.exports = mongoose.model("User", userSchema);
