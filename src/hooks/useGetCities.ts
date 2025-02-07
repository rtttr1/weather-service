import { useEffect, useState } from 'react';

const useGetCities = (city: string) => {
  const [serachedCities, setSerachedCities] = useState([]);

  useEffect(() => {
    if (!city) return;

    fetch(
      `${import.meta.env.VITE_WEATHER_API_BASE_URL}/search.json?q=${city}&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setSerachedCities(data));
  }, [city]);

  return { serachedCities };
};

export default useGetCities;
