import Text from '@/common/components/Text';
import { containerStyle } from '@/components/WeatherHighlightsCard/index.css';
import type { ReactElement } from 'react';

interface WeatherHighlightsCardProps {
  title: string;
  children: ReactElement;
}

const WeatherHighlightsCard = ({
  title,
  children,
}: WeatherHighlightsCardProps) => {
  return (
    <div className={containerStyle}>
      <Text color="gray">{title}</Text>
      {children}
    </div>
  );
};

export default WeatherHighlightsCard;
