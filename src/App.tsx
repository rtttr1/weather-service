import CurrentWeather from '@/components/CurrentWeather';
import ForecastWeather from '@/components/ForecastWeather';

import '@/styles/index.css';
import { containerStyle } from '@/styles/index.css';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('Seoul');

  const handleSelectedCity = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className={containerStyle}>
      <CurrentWeather
        selectedCity={selectedCity}
        handleSelectedCity={handleSelectedCity}
      />
      <ForecastWeather selectedCity={selectedCity} />
    </div>
  );
}

export default App;
