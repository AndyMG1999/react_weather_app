import React from 'react';
import { useGlobalContext } from './context';

const SearchBar = () => {
    const {setCity} = useGlobalContext();
    const [cityInput,setCityInput] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if(cityInput !== ''){
          setCity(cityInput);
          setCityInput('');
        }
        else{
          setCity('New York');
          setCityInput('');
        }
    }
    return (
      <section className='search_bar'>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='City Name' value={cityInput} onChange={(e)=>setCityInput(e.target.value)}/>
            <button type="submit">search</button>
          </form>
      </section>
  );
};

export default SearchBar;
