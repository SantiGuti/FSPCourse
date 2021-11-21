import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    let source = axios.CancelToken.source();
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key="+ api_key +"&q=" +
          city,
        {
          cancelToken: source.token,
        }
      )
      .catch((error) => {
        console.log("Request canceled", error.message);
        throw error;
      })
      .then((response) => {
        if (response.statusText === "OK") {
          setWeather(response.data);
        }
      })
      .catch((error) => {
        console.log(error.config);
      });

    return () => {
      source.cancel("Weather component is unmounting");
    };
  }, [city]);
  console.log(weather);
  if (weather && weather.current) {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <p>
          <strong>Temperature:</strong> {weather.current.temp_c} Celsius
        </p>
        <img src={weather.current.condition.icon} alt="weather" />
        <p>
          <strong>Wind:</strong> {weather.current.wind_kph} km/h direction{" "}
          {weather.current.wind_dir}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Weather;