import React from 'react';
import { useGlobalContext } from './context';
import WeatherDay from './WeatherDay';
import { useEffect } from 'react';

const WeatherList = () => {
    const {futureWeather,isFutureWeatherloading} = useGlobalContext();
    const currentDay = new Date().getDay();
    useEffect(()=>console.log('re-rendering future weather'))
    return (
      <section className='weather_list'>
          {futureWeather.filter((day,index) => index !== 0).map((day,index)=>{
              let weatherDay = currentDay + (index + 1);
              const transitionSpeed = `all ${0.3+(index*0.2)}s linear`
              if(weatherDay > 6) weatherDay -= 6;
              const {temp} = day;
              const {dt:dayID} = day;
              const {min,max} = temp;
              return <WeatherDay key={dayID} id={dayID} day={weatherDay} min={min} max={max} loading={isFutureWeatherloading} transitionSpeed={transitionSpeed}/>;
          })}
      </section>
  );
};

export default WeatherList;
