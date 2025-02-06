import { containerStyle } from '@/components/ForecastWeather/index.css';
import WeatherDataTab from '@/components/WeatherDataTab';
import WeatherDetails from '@/components/WeatherDetails';
import { getDayOfWeek } from '@/utils';
import { useEffect, useState } from 'react';

interface ForecastWeatherProps {
  selectedCity: string;
}

export type weatherDetailsTypes = {
  uv: string;
  humidity: string;
  precipitation: string;
};

export type hourWeatherTypes = {
  time: string;
  temp_c: string;
  iconUrl: string;
};

export type dateWeatherTypes = {
  day: string;
  maxtemp_c: string;
  mintemp_c: string;
  iconUrl: string;
};

const ForecastWeather = ({ selectedCity }: ForecastWeatherProps) => {
  const [weatherDetailData, setWeatherDetailData] = useState<weatherDetailsTypes>();
  const [hourlyWeatherList, setHourlyWeatherList] =
    useState<hourWeatherTypes[]>();
  const [weeklyWeatherList, setWeeklyWeatherList] =
    useState<dateWeatherTypes[]>();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_WEATHER_API_BASE_URL
      }/forecast.json?q=${selectedCity}&days=7&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const weatherDetailsData = {
          uv: data.forecast.forecastday[0].day.uv,
          humidity: data.forecast.forecastday[0].day.avghumidity,
          precipitation: data.forecast.forecastday[0].day.daily_chance_of_rain,
        };

        setWeatherDetailData(weatherDetailsData);

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
  }, [selectedCity]);

  return (
    <div className={containerStyle}>
      <WeatherDataTab
        hourlyWeatherList={hourlyWeatherList}
        weeklyWeatherList={weeklyWeatherList}
      />
      <WeatherDetails weatherDetailData={weatherDetailData} />
    </div>
  );
};

export default ForecastWeather;
