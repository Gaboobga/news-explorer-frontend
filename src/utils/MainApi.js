const BASE_URL = 'https://news-explorer-backend-0in4.onrender.com';

const getToken = () => localStorage.getItem('jwt');

const request = (url, options) => fetch(`${BASE_URL}${url}`, options)
  .then((res) => {
    if (!res.ok) {
      return res.json().then((data) => Promise.reject(data));
    }
    return res.json();
  });

export const register = (email, password, name) => request('/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password, name }),
});

export const login = (email, password) => request('/signin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});

export const getCurrentUser = () => request('/users/me', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getSavedArticles = () => request('/articles', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export const saveArticle = (article) => request('/articles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
  body: JSON.stringify(article),
});

export const deleteArticle = (articleId) => request(`/articles/${articleId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});