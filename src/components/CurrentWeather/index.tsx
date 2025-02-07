import fetchCurrentWeather from '@/api/fetchCurrentWeather';
import Text from '@/common/components/Text';
import {
  containerStyle,
  currentWeatherWrapper,
  dateWrapperStyle,
  dividerStyle,
  cityImageStyle,
} from '@/components/CurrentWeather/index.css';
import SearchCity from '@/components/SearchCity';
import { DEGREES_CELSIUS } from '@/constants';
import { useState } from 'react';

interface CurrentWeatherProps {
  selectedCity: string;
  handleSelectedCity: (city: string) => void;
}

const CurrentWeather = ({
  selectedCity,
  handleSelectedCity,
}: CurrentWeatherProps) => {
  const [country, setcountry] = useState('South Korea');

  const currentWeather = fetchCurrentWeather(selectedCity);

  const handleCountry = (country: string) => {
    setcountry(country);
  };

  return (
    <div className={containerStyle}>
      <SearchCity
        handleSelectedCity={handleSelectedCity}
        handleCountry={handleCountry}
      />
      <img src={currentWeather?.iconUrl} width={200} alt="" />
      <div className={currentWeatherWrapper}>
        <Text fontTag="h1">
          {currentWeather?.temperature} {DEGREES_CELSIUS}
        </Text>
        <div className={dateWrapperStyle}>
          <Text fontTag="b2">{currentWeather?.day}, </Text>
          <Text fontTag="b2" color="gray">
            {currentWeather?.time}
          </Text>
        </div>
        <hr className={dividerStyle} />
        <div className={cityImageStyle}>
          <Text fontTag="b4" color="white" style={{ zIndex: 5 }}>
            {selectedCity}, {country}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
