import { Tab } from '@/common/components/Tab';
import WeeklyWeatherList from '@/components/WeeklyWeatherList';
import { useState } from 'react';
import HourlyWeatherList from '@/components/HourlyWeatherList';
import type {
  dateWeatherTypes,
  hourWeatherTypes,
} from '@/components/ForecastWeather';

interface WeatherDataTabProps {
  hourlyWeatherList: hourWeatherTypes[];
  weeklyWeatherList: dateWeatherTypes[];
}
const WeatherDataTab = ({
  hourlyWeatherList,
  weeklyWeatherList,
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
        <WeeklyWeatherList weeklyWeatherList={weeklyWeatherList} />
      </Tab.Panel>
    </Tab>
  );
};

export default WeatherDataTab;
