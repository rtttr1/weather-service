import Text from '@/common/components/Text';
import {
  circlePosition,
  circleStyle,
  containerStyle,
  cylindricalStyle,
  detailWrapper,
  figureWrapper,
} from '@/components/WeatherDetailCard/index.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

interface WeatherDetailCardProps {
  title?: string;
  figure?: string | number;
  unit?: string;
}

const getCirclePosition = (percentage: number) => {
  const position = (100 - 16 - 4 - 4) * (percentage / 100) + 4;
  return `${position}px`;
};

const WeatherDetailCard = ({ title, figure, unit }: WeatherDetailCardProps) => {
  return (
    <div className={containerStyle}>
      <Text color="gray">{title}</Text>
      <div className={detailWrapper}>
        <div className={figureWrapper}>
          <Text fontTag="h2">{figure}</Text>
          {unit && <Text fontTag="b2">{unit}</Text>}
        </div>
        <div className={cylindricalStyle}>
          <div
            className={circleStyle}
            style={assignInlineVars({
              [circlePosition]: getCirclePosition(Number(figure)),
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailCard;
