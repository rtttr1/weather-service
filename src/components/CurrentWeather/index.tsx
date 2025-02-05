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
import { getDayOfWeek } from '@/utils';
import { useEffect, useState } from 'react';

type currentWeatherTypes = {
  locationName: string;
  iconUrl: string;
  temperature: string;
  day: string;
  time: string;
  precipitation: string;
  cloud: string;
};

interface CurrentWeatherProps {
  selectedCity: string;
  handleSelectedCity: (city: string) => void;
}

const CurrentWeather = ({
  selectedCity,
  handleSelectedCity,
}: CurrentWeatherProps) => {
  const [currentWeather, setCurrentWeather] = useState<currentWeatherTypes>();
  const [country, setcountry] = useState('South Korea');

  const handleCountry = (country: string) => {
    setcountry(country);
  };

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_WEATHER_API_BASE_URL
      }/current.json?q=${selectedCity}&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`,
    )
      .then((response) => {
        return response.json(); // response에 저장되어있는 JSon 메서드를 사용하여 json 객체 자동변환 가능
      })
      .then((data) => {
        const currentWeatherData = {
          locationName: data.location.name,
          iconUrl: data.current.condition.icon,
          temperature: data.current.temp_c,
          day: getDayOfWeek(data.location.localtime),
          time: data.location.localtime.split(' ')[1],
          precipitation: data.current.precip_mm,
          cloud: data.current.cloud,
        };

        setCurrentWeather(currentWeatherData);
      });
  }, [selectedCity]);

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
