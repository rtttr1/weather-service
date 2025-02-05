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
  figure?: string;
  unit?: string;
}

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
            style={assignInlineVars({ [circlePosition]: `${figure}%` })}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailCard;
