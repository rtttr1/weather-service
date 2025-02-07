import CurrentWeather from '@/components/CurrentWeather';
import ForecastWeather from '@/components/ForecastWeather';
import { DEFAULT_CITY } from '@/constants';

import '@/styles/index.css';
import { containerStyle } from '@/styles/index.css';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);

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
