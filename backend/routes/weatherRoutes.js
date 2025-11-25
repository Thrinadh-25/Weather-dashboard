const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ message: 'City is required' });

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const baseUrl = process.env.WEATHER_API_BASE_URL;
    
    // Example for OpenWeatherMap
    const response = await axios.get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
    
    const data = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      name: response.data.name
    };

    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

module.exports = router;
