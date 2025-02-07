import fetchForecastWeather from '@/api/fetchForecastWeather';
import { containerStyle } from '@/components/ForecastWeather/index.css';
import WeatherDataTab from '@/components/WeatherDataTab';
import WeatherDetails from '@/components/WeatherDetails';

interface ForecastWeatherProps {
  selectedCity: string;
}

const ForecastWeather = ({ selectedCity }: ForecastWeatherProps) => {
  const { weatherDetailData, hourlyWeathers, dailyWeathers } =
    fetchForecastWeather(selectedCity);
  return (
    <div className={containerStyle}>
      <WeatherDataTab
        hourlyWeathers={hourlyWeathers}
        dailyWeathers={dailyWeathers}
      />
      <WeatherDetails weatherDetailData={weatherDetailData} />
    </div>
  );
};

export default ForecastWeather;
