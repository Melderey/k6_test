const padTo2Digits = (num) => num.toString().padStart(2, '0'); // Преобразует 9 в 09, а 10 оставит без изменений

const getFormatedDate = (date) => {
  const day = padTo2Digits(date.getDate());
  const month = padTo2Digits(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${month}%2F${day}%2F${year}`;
};

const getRandomDate = (start, end) => {
  const randomDate = new Date(start.getTime()
          + Math.random() * (end.getTime() - start.getTime()));

  return randomDate;
};

export const getRandomCity = (cityArr = []) => {
  const max = cityArr.length;
  const cityNum = Math.floor(Math.random() * max);

  return cityArr[cityNum];
};

export const getRandomDelay = (min, max, delay) => {
  const randomDelay = delay + (delay * (min + Math.floor(Math.random() * max))) / 100;
  return randomDelay;
};

export const HOST = 'localhost';
export const PORT = '1080';
export const LOGIN = 'jojo';
export const PASS = 'bean';
export const DEPART_DATE = getFormatedDate(new Date());
export const RETURN_DATE = getRandomDate(new Date(), new Date(2025, 0, 1));
