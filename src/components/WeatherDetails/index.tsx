import {
  containerStyle,
  cardsWrapperStyle,
  titleStyle,
} from '@/components/WeatherDetails/index.css';

import WeatherDetailCard from '@/components/WeatherDetailCard';
import type { weatherDetailsTypes } from '@/components/ForecastWeather';

interface WeatherDetailsProps {
  weatherDetailData: weatherDetailsTypes;
}

const WeatherDetails = ({ weatherDetailData }: WeatherDetailsProps) => {
  return (
    <section className={containerStyle}>
      <h2 className={titleStyle}>Today's Details</h2>
      <div className={cardsWrapperStyle}>
        <WeatherDetailCard title="UV" figure={weatherDetailData.uv * 100} />
        <WeatherDetailCard
          title="Humidity"
          figure={weatherDetailData.humidity}
        />
        <WeatherDetailCard
          title="Precipitation"
          figure={weatherDetailData.precipitation}
        />
      </div>
    </section>
  );
};

export default WeatherDetails;
