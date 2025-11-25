const express = require("express");
const router = express.Router();
const { getWeatherByCity } = require("../controllers/weatherController");

// Public route for weather lookup
router.get("/", getWeatherByCity);

module.exports = router;
