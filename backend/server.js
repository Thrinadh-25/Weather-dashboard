const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://weather-dashboard25.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/favorites', favoriteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
