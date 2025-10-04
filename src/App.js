import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "abafad6d68bdeab306823de4e1c25765";

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
      );

      if (!weatherRes.ok) throw new Error("City not found");

      const weatherData = await weatherRes.json();
      setWeather(weatherData);
      
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
      );
      if (!forecastRes.ok) throw new Error("Forecast not available");

      const forecastData = await forecastRes.json();
      setForecast(forecastData);

      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) fetchWeather(lastCity);
  }, []);

  return (
    <div className="App d-flex flex-column align-items-center">
      <Header onSearch={fetchWeather} />
      {loading && <p className="text-light mt-4">Loading...</p>}
      {error && <p className="text-danger mt-4">{error}</p>}
      <WeatherDisplay weather={weather} />
      <ForecastDisplay forecast={forecast} />
      <Footer />
    </div>
  );
}

export default App;
