import { useEffect, useState } from 'react';
import { getDayOfWeek } from '@/utils';
import type {
  dailyWeatherResponseTypes,
  dateWeatherTypes,
  hourlyWeatherResponseTypes,
  hourlyWeatherTypes,
  weatherDetailsTypes,
} from '@/types';

const fetchForecastWeather = (selectedCity: string) => {
  const [weatherDetailData, setWeatherDetailData] = useState(
    {} as weatherDetailsTypes,
  );
  const [hourlyWeathers, setHourlyWeathers] = useState(
    [] as hourlyWeatherTypes[],
  );
  const [dailyWeathers, setDailyWeathers] = useState([] as dateWeatherTypes[]);

  const forecastApiUrl = `${
    import.meta.env.VITE_WEATHER_API_BASE_URL
  }/forecast.json?q=${selectedCity}&days=7&key=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;

  useEffect(() => {
    fetch(forecastApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((weatherData) => {
        const weatherDetailsData = {
          uv: weatherData.forecast.forecastday[0].day.uv,
          humidity: weatherData.forecast.forecastday[0].day.avghumidity,
          precipitation:
            weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
        };

        const hourlyWeatherData = weatherData.forecast.forecastday
          .flatMap((data: { hour: hourlyWeatherResponseTypes }) => data.hour)
          .filter(
            (_: hourlyWeatherResponseTypes, index: number) =>
              index % 4 === 0 && index < 28,
          )
          .map((data: hourlyWeatherResponseTypes) => {
            return {
              time: data.time.split(' ')[1],
              temp_c: data.temp_c,
              iconUrl: data.condition.icon,
            };
          });

        const dailyWeatherData = weatherData.forecast.forecastday.map(
          (data: dailyWeatherResponseTypes) => {
            return {
              day: getDayOfWeek(data.date),
              maxtemp_c: data.day.maxtemp_c,
              mintemp_c: data.day.mintemp_c,
              iconUrl: data.day.condition.icon,
            };
          },
        );

        setWeatherDetailData(weatherDetailsData);
        setHourlyWeathers(hourlyWeatherData);
        setDailyWeathers(dailyWeatherData);
      });
  }, [selectedCity]);

  return {
    weatherDetailData,
    hourlyWeathers,
    dailyWeathers,
  };
};

export default fetchForecastWeather;
