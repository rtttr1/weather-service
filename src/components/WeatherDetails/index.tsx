import Text from '@/common/components/Text';
import {
  containerStyle,
  cardsWrapperStyle,
} from '@/components/WeatherDetails/index.css';

import WeatherDetailCard from '@/components/WeatherDetailCard';
import type { weatherDetailsTypes } from '@/components/ForecastWeather';

interface WeatherDetailsProps {
  weatherDetails?: weatherDetailsTypes;
}

const WeatherDetails = ({ weatherDetails }: WeatherDetailsProps) => {
  return (
    <div className={containerStyle}>
      <Text fontTag="b1">Today's Details</Text>
      <div className={cardsWrapperStyle}>
        <WeatherDetailCard title="UV" figure={weatherDetails?.uv} />
        <WeatherDetailCard
          title="Humidity"
          figure={weatherDetails?.humidity}
          unit="%"
        />
        <WeatherDetailCard
          title="Precipitation"
          figure={weatherDetails?.precipitation}
          unit="%"
        />
      </div>
    </div>
  );
};

export default WeatherDetails;
