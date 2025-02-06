import { containerStyle } from '@/components/DailyWeathers/index.css';
import WeatherDataCard from '@/components/WeatherDataCard';
import type { dateWeatherTypes } from '@/types/index';

interface DailyWeathersProps {
  DailyWeathers: dateWeatherTypes[];
}

const DailyWeathers = ({ DailyWeathers }: DailyWeathersProps) => {
  return (
    <ul className={containerStyle}>
      {DailyWeathers.map((data, index) => (
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

export default DailyWeathers;
