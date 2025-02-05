import { Tab } from '@/common/components/Tab';
import WeeklyWeatherList from '@/components/WeeklyWeatherList';
import { useState } from 'react';
import HourlyWeatherList from '@/components/HourlyWeatherList';

const WeatherDataTab = () => {
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
        <HourlyWeatherList />
        <WeeklyWeatherList />
      </Tab.Panel>
    </Tab>
  );
};

export default WeatherDataTab;
