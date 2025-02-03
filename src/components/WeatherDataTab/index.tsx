import { Tab } from '@/common/components/Tab';
import WeatherDataCard from '@/components/WeatherDataCard';
import { useState } from 'react';

interface WeatherDataTabProps {}

const WeatherDataTab = ({}: WeatherDataTabProps) => {
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
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            day="Sun"
            highestTemperature="3"
            lowestTemperature="-3"
          />
        </ul>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <WeatherDataCard
            time="13:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            time="14:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            time="15:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            time="16:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            time="17:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            time="18:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
          <WeatherDataCard
            time="19:00"
            highestTemperature="3"
            lowestTemperature="-3"
          />
        </ul>
      </Tab.Panel>
    </Tab>
  );
};

export default WeatherDataTab;
