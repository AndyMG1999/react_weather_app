import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  // useState where data will be stored
  const [weather,setWeather] = useState({});
  const [futureWeather,setFutureWeather] = useState([]);
  const [city,setCity] = useState('New York');
  const [isMainWeatherloading, setIsMainWeatherloading] = useState(true);
  const [isFutureWeatherloading, setIsFutureWeatherloading] = useState(true);

  let currentWeatherUrl = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`
  let futureWeatherUrl = `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${city}&cnt=6&units=imperial`
  // Delay used for artificial loading
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // Use Effect in charge of getting current weather
  useEffect(()=>{
    async function fetchAll(){
    console.log('getting weather');
    const fetchCurrentWeather = async () => {
      const response = await fetch(currentWeatherUrl, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "48bab2c593mshfaf78d7dc92424dp1f974bjsn81e32d23f109"
        }
      })
      const data = await response.json();
      const {main,name:cityName,sys,weather:weatherDetails,wind} = data;
      const weatherData = {
        temperature: main.temp,
        feelsLike: main.feels_like,
        cityName: cityName,
        country: sys.country,
        weatherDescription: weatherDetails[0].description,
        wind: wind.speed,
        windDirection: wind.deg,
        humidity: main.humidity,
        low: main.temp_min,
        high: main.temp_max
      }
      setWeather(weatherData);
      await delay(2000);
    }
    const fetchFutureWeather = async () => {
      const response = await fetch(futureWeatherUrl, {
      "method": "GET",
      "headers": {
       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
       "x-rapidapi-key": "48bab2c593mshfaf78d7dc92424dp1f974bjsn81e32d23f109"
       }
      });
      const data = await response.json()
      const {list} = data;
      setFutureWeather(list);
      return;
     }
    setIsMainWeatherloading(true);
    setIsFutureWeatherloading(true);
    await fetchCurrentWeather();
    await fetchFutureWeather();
    setIsMainWeatherloading(false);
    setIsFutureWeatherloading(false);
    }
    fetchAll();
  },[city,currentWeatherUrl,futureWeatherUrl])

  return (
    <AppContext.Provider value={{isMainWeatherloading,isFutureWeatherloading,weather,futureWeather,setCity}}>{children}</AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }
