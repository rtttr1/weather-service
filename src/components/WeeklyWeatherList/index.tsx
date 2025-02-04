import { containerStyle } from '@/components/WeeklyWeatherList/index.css';
import WeatherDataCard from '@/components/WeatherDataCard';
import { useEffect, useState } from 'react';
import { getDayOfWeek } from '@/utils';

type dateWeatherTypes = {
  day: string;
  maxtemp_c: string;
  mintemp_c: string;
  iconUrl: string;
};

const WeeklyWeatherList = () => {
  const [weeklyWeatherList, setWeeklyWeatherList] =
    useState<dateWeatherTypes[]>();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_WEATHER_API_BASE_URL
      }/forecast.json?q=Seoul&days=7&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`,
    )
      .then((response) => {
        return response.json(); // response에 저장되어있는 JSon 메서드를 사용하여 json 객체 자동변환 가능
      })
      .then((data) => {
        const weeklyWeatherData = data.forecast.forecastday.map(
          (weatherData: {
            date: string;
            day: {
              maxtemp_c: string;
              mintemp_c: string;
              condition: { icon: string };
            };
          }) => {
            return {
              day: getDayOfWeek(weatherData.date),
              maxtemp_c: weatherData.day.maxtemp_c,
              mintemp_c: weatherData.day.mintemp_c,
              iconUrl: weatherData.day.condition.icon,
            };
          },
        );

        setWeeklyWeatherList(weeklyWeatherData);
      });
  }, []);
  return (
    <ul className={containerStyle}>
      {weeklyWeatherList?.map((data, index) => (
        <WeatherDataCard
          key={`${index}-${data.day}`}
          day={data.day}
          weatherIconUrl={data.iconUrl}
          highestTemperature={data.maxtemp_c}
          lowestTemperature={data.mintemp_c}
        />
      ))}
    </ul>
  );
};

export default WeeklyWeatherList;
