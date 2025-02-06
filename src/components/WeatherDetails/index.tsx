import {
  containerStyle,
  cardsWrapperStyle,
  titleStyle,
} from '@/components/WeatherDetails/index.css';

import WeatherDetailCard from '@/components/WeatherDetailCard';
import type { weatherDetailsTypes } from '@/components/ForecastWeather';

interface WeatherDetailsProps {
  weatherDetailData?: weatherDetailsTypes;
}

const calculateUVPercent = (uv?: string | number) => {
  return Number(uv) * 100;
};

const WeatherDetails = ({ weatherDetailData }: WeatherDetailsProps) => {
  return (
    <section className={containerStyle}>
      <h2 className={titleStyle}>Today's Details</h2>
      <div className={cardsWrapperStyle}>
        <WeatherDetailCard
          title="UV"
          figure={50}
        />
        <WeatherDetailCard
          title="Humidity"
          figure={100}
          unit="%"
        />
        <WeatherDetailCard
          title="Precipitation"
          figure={0}
          unit="%"
        />
      </div>
    </section>
  );
};

export default WeatherDetails;
