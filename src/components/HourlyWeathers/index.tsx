import WeatherDataCard from '@/components/WeatherDataCard';
import { containerStyle } from '@/components/DailyWeathers/index.css';

import type { hourlyWeatherTypes } from '@/types';

interface HourlyWeathersProps {
  hourlyWeathers: hourlyWeatherTypes[];
}

const HourlyWeathers = ({ hourlyWeathers }: HourlyWeathersProps) => {
  return (
    <ul className={containerStyle}>
      {hourlyWeathers.map((data, index) => (
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

export default HourlyWeathers;
