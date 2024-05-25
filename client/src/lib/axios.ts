import axios from 'axios';

export const request = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
