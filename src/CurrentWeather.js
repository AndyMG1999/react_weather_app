import react from 'react';
import React from 'react';
import { useGlobalContext } from './context';

const placeholderImg = 'https://iconarchive.com/download/i89287/icons8/ios7/Weather-Partly-Cloudy-Rain.ico';
const CurrentWeather = () => {
  const {weather,isMainWeatherloading} = useGlobalContext();
  const {cityName, country, temperature,feelsLike,weatherDescription,wind,humidity,low,high} = weather;
  react.useEffect(()=>console.log('re-rendering current weather'));
  return (
    <article className={`main_weather_summary ${isMainWeatherloading? 'hide_weather_summary':'show_weather_summary'}`}>
        <div>
          <h3>{`${cityName}, ${country}`}</h3>
          <img src={placeholderImg} alt="weather" />
          <h2>{`${Math.round(parseInt(temperature))}°`}</h2>
        </div>
        <div className='main_weather_details'>
          <p><span>{weatherDescription}</span></p>
          <p>Feels Like: <span>{`${Math.round(parseInt(feelsLike))} °`}</span></p>
          
          <p>Low <span>{`${Math.round(parseInt(low))} °`}</span></p>
          <p>High <span>{`${Math.round(parseInt(high))} °`}</span></p>
          
          <p>Wind <span>{`${wind} Mph`}</span></p>
          <p>Humidity <span>{`${humidity}%`}</span></p>
        </div>
    </article>
  );
};

export default CurrentWeather;
