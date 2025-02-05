import {
  containerStyle,
  temperatureWrapper,
} from '@/components/WeatherDataCard/index.css';
import Text from '@/common/components/Text';

interface CardProps {
  day?: string;
  time?: string;
  weatherIconUrl?: string;
  highestTemperature: string | number;
  lowestTemperature?: string | number;
}

const WeatherDataCard = ({
  day = '',
  time = '',
  weatherIconUrl,
  highestTemperature,
  lowestTemperature,
}: CardProps) => {
  return (
    <li className={containerStyle}>
      <Text fontTag="b3">{day ? day : time}</Text>
      <img src={weatherIconUrl} width={40} alt="" />
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
