import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { FaSearch, FaTrash, FaSignOutAlt, FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFavorites();
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      fetchWeather(lastCity);
    }
  }, []);

  const fetchFavorites = async () => {
    try {
      const res = await api.get('/favorites');
      setFavorites(res.data);
    } catch (err) {
      console.error('Error fetching favorites');
    }
  };

  const fetchWeather = async (cityName) => {
    try {
      setError('');
      const res = await api.get(`/weather?city=${cityName}`);
      setWeather(res.data);
      localStorage.setItem('lastCity', cityName);
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity('');
    }
  };

  const addToFavorites = async () => {
    if (weather && !favorites.includes(weather.name)) {
      try {
        await api.post('/favorites', { city: weather.name });
        fetchFavorites();
      } catch (err) {
        console.error('Error adding favorite');
      }
    }
  };

  const removeFavorite = async (cityName) => {
    try {
      await api.delete(`/favorites/${cityName}`);
      fetchFavorites();
    } catch (err) {
      console.error('Error removing favorite');
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Weather<span>Dash</span></h1>
        <div className="user-info">
          <span>Welcome, {user?.username}</span>
          <button onClick={logout} className="btn-logout"><FaSignOutAlt /> Logout</button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="search-section">
          <form onSubmit={handleSearch} className="search-bar">
            <input 
              type="text" 
              placeholder="Search city..." 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
            <button type="submit"><FaSearch /></button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </section>

        {weather && (
          <section className="weather-display">
            <div className="weather-card">
              <div className="weather-header">
                <h2>{weather.name}</h2>
                <img 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
                  alt={weather.condition} 
                />
              </div>
              <div className="weather-stats">
                <div className="stat">
                  <FaTemperatureHigh />
                  <span>{Math.round(weather.temperature)}°C</span>
                </div>
                <div className="stat">
                  <FaTint />
                  <span>{weather.humidity}%</span>
                </div>
                <div className="stat">
                  <FaWind />
                  <span>{weather.condition}</span>
                </div>
              </div>
              <button onClick={addToFavorites} className="btn-favorite">
                {favorites.includes(weather.name) ? 'Saved' : 'Add to Favorites'}
              </button>
            </div>
          </section>
        )}

        <section className="favorites-section">
          <h3>Favorite Cities</h3>
          {favorites.length === 0 ? (
            <p className="empty-msg">No favorites yet.</p>
          ) : (
            <div className="favorites-grid">
              {favorites.map((fav) => (
                <div key={fav} className="favorite-card" onClick={() => fetchWeather(fav)}>
                  <span>{fav}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeFavorite(fav); }}
                    className="btn-delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
