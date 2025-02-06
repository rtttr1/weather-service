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
