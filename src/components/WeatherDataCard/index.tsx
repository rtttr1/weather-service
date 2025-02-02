import { IcSunny } from '@/assets/svg';
import {
  containerStyle,
  temperatureWrapper,
} from '@/components/WeatherDataCard/index.css';
import Text from '@/components/Text';

interface CardProps {
  day: string;
  time?: string;
  weatherIconUrl?: string;
  highestTemperature: string | number;
  lowestTemperature: string | number;
}

const WeatherDataCard = ({
  day,
  highestTemperature,
  lowestTemperature,
}: CardProps) => {
  return (
    <li className={containerStyle}>
      <Text fontTag="b3">{day}</Text>
      <IcSunny width={40} height={40} />
      <div className={temperatureWrapper}>
        <Text fontTag="b3">{highestTemperature}</Text>
        <Text fontTag="b3" color="gray">
          {lowestTemperature}
        </Text>
      </div>
    </li>
  );
};

export default WeatherDataCard;
