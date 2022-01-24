import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import WeatherList from "./WeatherList";

function App() {
  return (
    <main className="main">
      <SearchBar />
      <section className="weather">
        <CurrentWeather />
        <WeatherList />
      </section>
    </main>
  );
}

export default App;
