const BASE_URL = 'https://nomoreparties.co/news/v2';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function getDateSevenDaysAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split('T')[0];
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

export function searchNews(query) {
  return fetch(
    `${BASE_URL}/everything?q=${query}&from=${getDateSevenDaysAgo()}&to=${getToday()}&pageSize=100&apiKey=${API_KEY}`
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
}