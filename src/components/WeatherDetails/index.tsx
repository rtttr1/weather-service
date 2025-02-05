import Text from '@/common/components/Text';
import {
  containerStyle,
  cardsWrapperStyle,
} from '@/components/WeatherDetails/index.css';

import { useEffect, useState } from 'react';
import WeatherDetailCard from '@/components/WeatherDetailCard';

type weatherDetailsTypes = {
  uv: string;
  humidity: string;
  precipitation: string;
};

const WeatherDetails = () => {
  const [weatherDetails, setWeatherDetails] = useState<weatherDetailsTypes>();
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_WEATHER_API_BASE_URL
      }/forecast.json?q=Seoul&days=1&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`,
    )
      .then((response) => {
        return response.json(); // response에 저장되어있는 JSon 메서드를 사용하여 json 객체 자동변환 가능
      })
      .then((data) => {
        const weatherDetailsData = {
          uv: data.forecast.forecastday[0].day.uv,
          humidity: data.forecast.forecastday[0].day.avghumidity,
          precipitation: data.forecast.forecastday[0].day.daily_chance_of_rain,
        };

        setWeatherDetails(weatherDetailsData);
      });
  }, []);

  return (
    <div className={containerStyle}>
      <Text fontTag="b1">Today's Details</Text>
      <div className={cardsWrapperStyle}>
        <WeatherDetailCard title="UV" figure={weatherDetails?.uv} />
        <WeatherDetailCard
          title="Humidity"
          figure={weatherDetails?.humidity}
          unit="%"
        />
        <WeatherDetailCard
          title="Precipitation"
          figure={weatherDetails?.precipitation}
          unit="%"
        />
      </div>
    </div>
  );
};

export default WeatherDetails;
