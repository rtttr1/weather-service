import { useEffect, useState } from 'react';

const fetchCities = (city: string) => {
  const [serachedCities, setSerachedCities] = useState([]);

  const cityApiUrl = `${
    import.meta.env.VITE_WEATHER_API_BASE_URL
  }/search.json?q=${city}&key=${import.meta.env.VITE_WEATHER_API_KEY}`;

  useEffect(() => {
    if (!city) return;

    fetch(cityApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => setSerachedCities(data));
  }, [city]);

  return { serachedCities };
};

export default fetchCities;
