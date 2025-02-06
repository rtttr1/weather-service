import { containerStyle } from '@/components/DailyWeatherList/index.css';
import WeatherDataCard from '@/components/WeatherDataCard';
import type { dateWeatherTypes } from '@/components/ForecastWeather';

interface DailyWeatherListProps {
  DailyWeatherList: dateWeatherTypes[];
}

const DailyWeatherList = ({ DailyWeatherList }: DailyWeatherListProps) => {
  return (
    <ul className={containerStyle}>
      {DailyWeatherList.map((data, index) => (
        <WeatherDataCard
          key={`${index}-${data.day}`}
          weatherTime={data.day}
          weatherIconUrl={data.iconUrl}
          firstTemperature={data.maxtemp_c}
          secondTemperature={data.mintemp_c}
        />
      ))}
    </ul>
  );
};

export default DailyWeatherList;
