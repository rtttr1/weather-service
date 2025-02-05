import WeatherDataCard from '@/components/WeatherDataCard';
import { containerStyle } from '@/components/WeeklyWeatherList/index.css';
import { useEffect, useState } from 'react';

type hourWeatherTypes = {
  time: string;
  temp_c: string;
  iconUrl: string;
};
const HourlyWeatherList = () => {
  const [hourlyWeatherList, setHourlyWeatherList] =
    useState<hourWeatherTypes[]>();

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
        const hourlyWeatherData = data.forecast.forecastday[0].hour.map(
          (weatherData: {
            time: string;
            temp_c: string;
            condition: { icon: string };
          }) => {
            return {
              time: weatherData.time.split(' ')[1],
              temp_c: weatherData.temp_c,
              iconUrl: weatherData.condition.icon,
            };
          },
        );

        setHourlyWeatherList(hourlyWeatherData);
      });
  }, []);
  return (
    <ul className={containerStyle}>
      {hourlyWeatherList?.map((data, index) => (
        <WeatherDataCard
          key={`${index}-${data.time}`}
          time={data.time}
          weatherIconUrl={data.iconUrl}
          highestTemperature={data.temp_c}
        />
      ))}
    </ul>
  );
};

export default HourlyWeatherList;
