import type { currentWeatherResponseTypes } from '@/types';
import { getDayOfWeek } from '@/utils';
import { useEffect, useState } from 'react';

const fetchCurrentWeather = (selectedCity: string) => {
  const [currentWeather, setCurrentWeather] =
    useState<currentWeatherResponseTypes>();

  const currentApiUrl = `${
    import.meta.env.VITE_WEATHER_API_BASE_URL
  }/current.json?q=${selectedCity}&key=${import.meta.env.VITE_WEATHER_API_KEY}`;

  useEffect(() => {
    fetch(currentApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const currentWeatherData = {
          locationName: data.location.name,
          iconUrl: data.current.condition.icon,
          temperature: data.current.temp_c,
          day: getDayOfWeek(data.location.localtime),
          time: data.location.localtime.split(' ')[1],
          precipitation: data.current.precip_mm,
          cloud: data.current.cloud,
        };

        setCurrentWeather(currentWeatherData);
      });
  }, [selectedCity]);

  return currentWeather;
};

export default fetchCurrentWeather;
