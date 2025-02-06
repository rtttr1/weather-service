import { Tab } from '@/common/components/Tab';
import DailyWeatherList from '@/components/DailyWeathers';
import { useState } from 'react';
import HourlyWeatherList from '@/components/HourlyWeathers';
import type { dateWeatherTypes, hourlyWeatherTypes } from '@/types/index';

interface WeatherDataTabProps {
  hourlyWeathers: hourlyWeatherTypes[];
  dailyWeathers: dateWeatherTypes[];
}

const WeatherDataTab = ({
  hourlyWeathers,
  dailyWeathers,
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
        <HourlyWeatherList hourlyWeathers={hourlyWeathers} />
        <DailyWeatherList DailyWeathers={dailyWeathers} />
      </Tab.Panel>
    </Tab>
  );
};

export default WeatherDataTab;
