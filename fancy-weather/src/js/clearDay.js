const clearDay = 'c01d';
const clearNight = 'c01n';
const rainSun = 'r05d';
const rainNight = 'r05n';
const hailSun = 's06d';
const hailNight = 's06n';
const cloudSun = 'c02d';
const cloudNight = 'c02n';
const thunder = ['t01d', 't01n', 't02d', 't02n', 't03d', 't03n', 't04d', 't04n', 't05d', 't05d'];
const drizzle = ['d01d', 'd01n', 'd02d', 'd02n', 'd03d', 'd03n'];
const rainLight = ['r01d', 'r01n', 'r04d', 'r04n'];
const rainModerate = ['r02d', 'r02n', 'f01d', 'f01n', 'u00d', 'u00n'];
const rainHeavy = ['r06d', 'r06n', 'r03d', 'r03n'];
const snowSun = ['s01d', 's04d'];
const snowNight = ['s01n', 's04n'];
const snowLight = ['s02d', 's02n'];
const snowHeavy = ['s03d', 's03n'];
const mist = ['a01d', 'a01n', 'a02d', 'a02n', 'a03d', 'a03n', 'a04d', 'a04n', 'a05d', 'a05n', 'a06d', 'a06n'];
const clouds = ['c03d', 'c03n', 'c04d', 'c04n'];

export const createImgWeatherIcon = (iconCode) => {
  if (iconCode === clearDay) {
    return './assets/img/clear-day.svg';
  }
  else if (iconCode === rainSun) {
    return './assets/img/partly-cloudy-day-rain.svg';
  }
  else if (iconCode === rainNight) {
    return './assets/img/partly-cloudy-night-rain.svg';
  }
  else if (iconCode === hailSun) {
    return './assets/img/partly-cloudy-day-hail.svg';
  }
  else if (iconCode === hailNight) {
    return './assets/img/partly-cloudy-night-hail.svg';
  }
  else if (iconCode === cloudSun) {
    return './assets/img/partly-cloudy-day.svg';
  }
  else if (iconCode === cloudNight) {
    return './assets/img/partly-cloudy-night.svg';
  }
  else if (thunder.includes(iconCode)) {
    return './assets/img/thunderstorms.svg';
  }
  else if (drizzle.includes(iconCode)) {
    return './assets/img/drizzle.svg';
  }
  else if (rainLight.includes(iconCode)) {
    return './assets/img/light-rain.svg';
  }
  else if (rainModerate.includes(iconCode)) {
    return './assets/img/moderate-rain.svg';
  }
  else if (rainHeavy.includes(iconCode)) {
    return './assets/img/heavy-snow.svg';
  }
  else if (snowSun.includes(iconCode)) {
    return './assets/img/partly-cloudy-day-snow.svg';
  }
  else if (snowNight.includes(iconCode)) {
    return './assets/img/partly-cloudy-night-snow.svg';
  }
  else if (snowLight.includes(iconCode)) {
    return './assets/img/light-snow.svg';
  }
  else if (snowHeavy.includes(iconCode)) {
    return './assets/img/heavy-snow.svg';
  }
  else if (mist.includes(iconCode)) {
    return './assets/img/mist.svg';
  }
  else if (clouds.includes(iconCode)) {
    return './assets/img/cloudy.svg';
  }
  else {
    return './assets/img/clear-night.svg';
  }
};
