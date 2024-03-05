const padTo2Digits = (num) => num.toString().padStart(2, '0'); // Преобразует 9 в 09, а 10 оставит без изменений

export const getFormatedDate = (date) => {
  const day = padTo2Digits(date.getDate());
  const month = padTo2Digits(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${month}%2F${day}%2F${year}`;
};

export const getRandomDate = (start, end) => {
  const randomDate = new Date(start.getTime()
          + Math.random() * (end.getTime() - start.getTime()));

  return randomDate;
};
