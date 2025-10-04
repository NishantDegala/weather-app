function ForecastDisplay({ forecast }) {
  if (!forecast) return null;

      const dailyForecast = forecast.list.filter((_, idx) => idx % 8 === 0);

  return (
    <div className="forecast-container mt-4 d-flex flex-wrap justify-content-center">
      {dailyForecast.map((item, idx) => {
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const date = new Date(item.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

        return (
          <div key={idx} className="card forecast-card m-2 p-2 text-center">
            <h6>{date}</h6>
            <img src={iconUrl} alt={item.weather[0].description} />
            <p>{item.main.temp.toFixed(1)}°C</p>
            <p>{item.weather[0].main}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastDisplay;
