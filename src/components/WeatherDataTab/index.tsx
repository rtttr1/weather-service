import { Tab } from '@/common/components/Tab';
import DailyWeatherList from '@/components/DailyWeatherList';
import { useState } from 'react';
import HourlyWeatherList from '@/components/HourlyWeatherList';
import type {
  dateWeatherTypes,
  hourlyWeatherTypes,
} from '@/components/ForecastWeather';

interface WeatherDataTabProps {
  hourlyWeatherList: hourlyWeatherTypes[];
  dailyWeatherList: dateWeatherTypes[];
}

const WeatherDataTab = ({
  hourlyWeatherList,
  dailyWeatherList,
}: WeatherDataTabProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  return (
    <Tab>
      <Tab.List
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
        variant="primary"
      >
        <Tab.Button variant="primary">Today</Tab.Button>
        <Tab.Button variant="primary">Week</Tab.Button>
      </Tab.List>
      <Tab.Panel selectedTab={selectedTab}>
        <HourlyWeatherList hourlyWeatherList={hourlyWeatherList} />
        <DailyWeatherList DailyWeatherList={dailyWeatherList} />
      </Tab.Panel>
    </Tab>
  );
};

export default WeatherDataTab;
