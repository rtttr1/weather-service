import {
  containerStyle,
  temperatureWrapper,
} from '@/components/WeatherDataCard/index.css';
import Text from '@/common/components/Text';
import { DEGREES_CELSIUS } from '@/constants';

interface CardProps {
  weatherTime: string;
  weatherIconUrl: string;
  firstTemperature: string;
  secondTemperature?: string;
}

const WeatherDataCard = ({
  weatherTime,
  weatherIconUrl,
  firstTemperature,
  secondTemperature,
}: CardProps) => {
  return (
    <li className={containerStyle}>
      <Text fontTag="b3">{weatherTime}</Text>
      <img src={weatherIconUrl} width={40} alt="날씨 정보 아이콘" />
      <div className={temperatureWrapper}>
        <Text fontTag="b3">
          {firstTemperature}
          {DEGREES_CELSIUS}
        </Text>
        {secondTemperature && (
          <Text fontTag="b3" color="gray">
            {secondTemperature}
            {DEGREES_CELSIUS}
          </Text>
        )}
      </div>
    </li>
  );
};

export default WeatherDataCard;
