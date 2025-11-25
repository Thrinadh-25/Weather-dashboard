# 🌦️ Weather Dashboard – MERN Stack Application

A full-stack weather application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates secure user authentication, real-time weather data integration, and a personalized favorites management system.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Testing Instructions](#testing-instructions)

---

## 📖 Overview

The **Weather Dashboard** allows users to:

- Register and log in securely.
- Search for real-time weather conditions for any city.
- Save their favorite cities for quick access.
- View detailed weather metrics like temperature, humidity, and wind speed.

---

**Features**
Authentication
• User registration and login using JWT authentication.
• Password hashing using bcrypt for security.
• Protected routes accessible only to authenticated users.
Weather Search
• Search for weather information by city name.
• Displays temperature, humidity, wind, condition description, and weather icon.
• Integration with the OpenWeatherMap API through a backend proxy.
Favorites Management
• Add cities to a favorites list.
• Remove saved cities.
• Click a favorite to fetch and view weather details.
• Favorites stored per user in MongoDB.
Frontend
• Developed using React and Vite.
• State management using Context API.
• Responsive user interface built using custom CSS.
Backend
• Node.js and Express used for server development.
• MongoDB and Mongoose used for data storage and modeling.
• JWT-based route protection for sensitive operations.

## ✨ Features

### 🔐 Authentication

- **User Registration & Login**: Secure JWT-based authentication.
- **Security**: Passwords are hashed using `bcrypt` before storage.
- **Protected Routes**: Dashboard and favorites are accessible only to logged-in users.

### 🌤️ Weather Search

- **Real-time Data**: Fetches data from the OpenWeatherMap API.
- **Detailed Metrics**: Displays temperature, humidity, wind speed, and weather conditions.
- **Visuals**: Dynamic weather icons based on current conditions.

### ⭐ Favorites Management

- **Save Cities**: Add frequently checked cities to a personal list.
- **Quick Access**: Click on a favorite city to instantly view its weather.
- **Manage List**: Remove cities from favorites easily.
- **Persistent Storage**: Favorites are stored in MongoDB linked to the user's account.

---

## 🛠️ Technologies Used

### Frontend

- **React (Vite)**: Fast and modern UI library.
- **React Router**: For seamless client-side navigation.
- **Context API**: For global state management (Auth & User data).
- **Axios**: For making HTTP requests.
- **CSS3**: Custom responsive styling.

### Backend

- **Node.js & Express.js**: Robust server-side framework.
- **MongoDB (Atlas) & Mongoose**: NoSQL database for flexible data modeling.
- **JWT (JSON Web Tokens)**: Stateless authentication mechanism.
- **bcryptjs**: Password encryption.
- **dotenv**: Environment variable management.

---

**Folder Structure**

## 📂 Folder Structure

```bash
Weather-dashboard/
│
├── backend/                # Server-side code
│   ├── config/             # Configuration files
│   ├── middleware/         # Auth middleware
│   ├── models/             # Mongoose models (User)
│   ├── routes/             # API routes (Auth, Weather, Favorites)
│   ├── server.js           # Entry point
│   └── .env                # Environment variables (not committed)
│
└── frontend/               # Client-side code
    ├── src/
    │   ├── context/        # Auth Context provider
    │   ├── pages/          # Login, Register, Dashboard pages
    │   ├── utils/          # API helpers
    │   ├── App.jsx         # Main component with routes
    │   └── main.jsx        # Entry point
    └── vite.config.js      # Vite configuration
```

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-link>
cd Weather-dashboard
```

### 2. Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
WEATHER_API_KEY=your_openweathermap_api_key
WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5/weather
PORT=5000
```

Start the server:

```bash
npm start
# Server runs on http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend folder, and install dependencies:

```bash
cd ../frontend
npm install
```

Start the development server:

```bash
npm run dev
# Frontend runs on http://localhost:5173 (usually)
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description                |
| :----- | :------------------- | :------------------------- |
| `POST` | `/api/auth/register` | Register a new user        |
| `POST` | `/api/auth/login`    | Login user and receive JWT |

### Weather

| Method | Endpoint                   | Description                          |
| :----- | :------------------------- | :----------------------------------- |
| `GET`  | `/api/weather?city={name}` | Get weather data for a specific city |

### Favorites

| Method   | Endpoint               | Description                  |
| :------- | :--------------------- | :--------------------------- |
| `GET`    | `/api/favorites`       | Get list of favorite cities  |
| `POST`   | `/api/favorites`       | Add a city to favorites      |
| `DELETE` | `/api/favorites/:city` | Remove a city from favorites |

---

## 🧪 Testing Instructions

1. **Register**: Create a new account on the `/register` page.
2. **Login**: Log in with your credentials.
3. **Search**: Enter a city name (e.g., "London") and hit search.
4. **Favorite**: Click "Add to Favorites" to save the city.
5. **Manage**: Click the trash icon to remove a favorite.
6. **Logout**: Click logout to end the session.

---

## 📝 Notes

- Ensure your **MongoDB Atlas** IP whitelist allows your current IP.
- The **OpenWeatherMap API Key** must be active.
- Never commit your `.env` file to version control.
