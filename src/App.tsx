import CurrentWeather from '@/components/CurrentWeather';
import WeatherDataCard from '@/components/WeatherDataCard';
import WeatherDataTab from '@/components/WeatherDataTab';
import '@/styles/index.css';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#F2F0FE',
        width: '100%',
        height: '100vh',
        display: 'flex',
        gap: '6rem',
      }}
    >
      <CurrentWeather />
      <WeatherDataTab />
    </div>
  );
}

export default App;
