import { containerStyle } from '@/components/WeeklyWeatherList/index.css';
import WeatherDataCard from '@/components/WeatherDataCard';
import type { dateWeatherTypes } from '@/components/ForecastWeather';

interface WeeklyWeatherListProps {
  weeklyWeatherList?: dateWeatherTypes[];
}

const WeeklyWeatherList = ({ weeklyWeatherList }: WeeklyWeatherListProps) => {
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
