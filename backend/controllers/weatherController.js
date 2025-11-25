const axios = require("axios");

exports.getWeatherByCity = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ message: "City is required" });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    const { data } = await axios.get(url);

    const result = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };

    res.json(result);
  } catch (err) {
    console.error("Weather Error:", err.response?.data || err.message);

    if (err.response?.status === 404) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(500).json({ message: "Failed to fetch weather data" });
  }
};
