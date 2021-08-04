const key = 'HISTORY';

export const getFromLocalStorage = () => {
  const parsedStorage = JSON.parse(localStorage.getItem(key)) || [];
  return parsedStorage;
};

export const setInLocalStorage = (obj) => {
  return localStorage.setItem(key, JSON.stringify(obj));
};
