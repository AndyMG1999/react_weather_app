import React from 'react';

const placeholderImg = 'https://iconarchive.com/download/i89287/icons8/ios7/Weather-Partly-Cloudy-Rain.ico';

const WeatherDay = ({day,min,max,loading,transitionSpeed}) => {
    const minInt = Math.round(parseFloat(min));
    const maxInt = Math.round(parseFloat(max));
    const returnDayOfWeek = () => {
        if(day === 0) return 'Sun';
        if(day === 1) return 'Mon';
        if(day === 2) return 'Tue';
        if(day === 3) return 'Wed';
        if(day === 4) return 'Thu';
        if(day === 5) return 'Fri';
        if(day === 6) return 'Sat';
    }
    return (
      <section className={`weather_day ${loading? 'hide_weather_day':'show_weather_day'}`} style={{transition:transitionSpeed}}>
          <h2>{returnDayOfWeek()}</h2>
          <img src={placeholderImg} alt='weather'/>
          <h2>{minInt}° |  {maxInt}°</h2>
      </section>
  );
};

export default WeatherDay;
