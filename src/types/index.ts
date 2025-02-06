export type weatherDetailsTypes = {
  uv: number;
  humidity: number;
  precipitation: number;
};

export type hourlyWeatherTypes = {
  time: string;
  temp_c: string;
  iconUrl: string;
};

export type dateWeatherTypes = {
  day: string;
  maxtemp_c: string;
  mintemp_c: string;
  iconUrl: string;
};

export type hourlyWeatherResponseTypes = {
  time: string;
  temp_c: string;
  condition: { icon: string };
};

export type dailyWeatherResponseTypes = {
  date: string;
  day: {
    maxtemp_c: string;
    mintemp_c: string;
    condition: { icon: string };
  };
};
