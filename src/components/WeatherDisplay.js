function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div
      className="card text-center mt-4 p-3 weather-card"
    >
      <div className="card-body">
        <h3 className="card-title">{weather.name}</h3>
        <img src={iconUrl} alt={weather.weather[0].description} />
        <p className="card-text">Temperature: {weather.main.temp}°C</p>
        <p className="card-text">Condition: {weather.weather[0].description}</p>
        <p className="card-text">Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
