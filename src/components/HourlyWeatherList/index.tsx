import type { hourlyWeatherTypes } from '@/components/ForecastWeather';
import WeatherDataCard from '@/components/WeatherDataCard';
import { containerStyle } from '@/components/DailyWeatherList/index.css';

interface HourlyWeatherListProps {
  hourlyWeatherList: hourlyWeatherTypes[];
}

const HourlyWeatherList = ({ hourlyWeatherList }: HourlyWeatherListProps) => {
  return (
    <ul className={containerStyle}>
      {hourlyWeatherList.map((data, index) => (
        <WeatherDataCard
          key={`${index}-${data.time}`}
          weatherTime={data.time}
          weatherIconUrl={data.iconUrl}
          firstTemperature={data.temp_c}
        />
      ))}
    </ul>
  );
};

export default HourlyWeatherList;
