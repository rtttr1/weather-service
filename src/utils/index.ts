export const getDayOfWeek = (date: string) => {
  const week = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];

  return week[new Date(date).getDay()];
};
