import Text from '@/common/components/Text';
import {
  containerStyle,
  weatherHighlightsCardsWrapperStyle,
} from '@/components/WeatherHighlights/index.css';
import WeatherHighlightsCard from '@/components/WeatherHighlightsCard';
import { useEffect, useState } from 'react';

interface WeatherHighlightsProps {}

type weatherHighlightsTypes = {
  uv: string;
  humidity: string;
  sunrise: string;
  sunset: string;
};

const WeatherHighlights = ({}: WeatherHighlightsProps) => {
  const [weatherHighlightsList, setWeatherHighlightsList] =
    useState<weatherHighlightsTypes>();
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
        const weatherHighlightsData = {
          uv: data.forecast.forecastday[0].day.uv,
          humidity: data.forecast.forecastday[0].day.avghumidity,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
        };

        setWeatherHighlightsList(weatherHighlightsData);
      });
  }, []);
  return (
    <div className={containerStyle}>
      <Text fontTag="b1">Today's Highlights</Text>
      <div className={weatherHighlightsCardsWrapperStyle}>
        <WeatherHighlightsCard title="UV Index">
          {weatherHighlightsList?.uv}
        </WeatherHighlightsCard>
        <WeatherHighlightsCard title="humidity">
          {weatherHighlightsList?.humidity}
        </WeatherHighlightsCard>
        <WeatherHighlightsCard title="Sunruise & Sunset">
          {weatherHighlightsList?.sunrise}
          {weatherHighlightsList?.sunset}
        </WeatherHighlightsCard>
      </div>
    </div>
  );
};

export default WeatherHighlights;
