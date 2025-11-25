Weather Dashboard – MERN Stack Application
Overview

This project is a full-stack weather application built using the MERN stack (MongoDB, Express.js, React, Node.js).
It provides user authentication, real-time weather search, and a favorites management system.

The aim of the project is to demonstrate understanding of full-stack development, API integration, state management, and secure backend implementation.

Features
Authentication

User registration and login using JWT authentication.

Password hashing using bcrypt for security.

Protected routes accessible only to authenticated users.

Weather Search

Search for weather information by city name.

Displays temperature, humidity, wind, condition description, and weather icon.

Integration with the OpenWeatherMap API through a backend proxy.

Favorites Management

Add cities to a favorites list.

Remove saved cities.

Click a favorite to fetch and view weather details.

Favorites stored per user in MongoDB.

Frontend

Developed using React and Vite.

State management using Context API.

Responsive user interface built using custom CSS.

Backend

Node.js and Express used for server development.

MongoDB and Mongoose used for data storage and modeling.

JWT-based route protection for sensitive operations.

Folder Structure
Weather-dashboard/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ ├── package.json
│ └── .env
│
└── frontend/
├── src/
│ ├── pages/
│ ├── context/
│ ├── utils/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── vite.config.js
├── package.json

Installation and Setup

1. Clone the Repository
   git clone <repository-link>
   cd Weather-dashboard

Frontend Setup
Install Dependencies
cd frontend
npm install

Start Development Server
npm run dev

The frontend will run at the port shown in the terminal (usually http://localhost:5173
).

Backend Setup
Install Dependencies
cd backend
npm install

Environment Variables

Create a .env file inside the backend folder with the following keys:

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
WEATHER_API_KEY=<your-openweather-api-key>
PORT=5000

Start Backend Server
npm start

The backend will run at:

http://localhost:5000

API Endpoints
Authentication
Method Endpoint Description
POST /auth/register Register new user
POST /auth/login Login user
Weather
Method Endpoint Description
GET /weather?city={name} Get weather by city name
Favorites
Method Endpoint Description
GET /favorites Get favorite cities
POST /favorites Add favorite city
DELETE /favorites/:city Remove favorite city
Testing Instructions

Test user registration and login.

Test valid and invalid weather searches.

Test adding and removing favorite cities.

Test protected routes using JWT.

Ensure proper error messages for invalid inputs.

Technologies Used
Frontend

React (Vite)

React Router

Context API

Axios

CSS

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JSON Web Token (JWT)

bcrypt

dotenv

Notes

.env file should never be committed to Git.

Ensure OpenWeatherMap API key is active before testing weather features.

MongoDB cluster and database user must be configured in Atlas.
