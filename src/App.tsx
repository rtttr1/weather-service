import CurrentWeather from '@/components/CurrentWeather';
import ForecastWeather from '@/components/ForecastWeather';

import '@/styles/index.css';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('Seoul');

  const handleSelectedCity = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div
      style={{
        backgroundColor: '#F2F0FE',
        width: '100%',
        height: '100vh',
        display: 'flex',
        gap: '10rem',
      }}
    >
      <CurrentWeather
        selectedCity={selectedCity}
        handleSelectedCity={handleSelectedCity}
      />
      <ForecastWeather selectedCity={selectedCity} />
    </div>
  );
}

export default App;
