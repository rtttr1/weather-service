import type { hourWeatherTypes } from '@/components/ForecastWeather';
import WeatherDataCard from '@/components/WeatherDataCard';
import { containerStyle } from '@/components/WeeklyWeatherList/index.css';

interface HourlyWeatherListProps {
  hourlyWeatherList: hourWeatherTypes[];
}

const HourlyWeatherList = ({ hourlyWeatherList }: HourlyWeatherListProps) => {
  return (
    <ul className={containerStyle}>
      {hourlyWeatherList.map((data, index) => (
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
