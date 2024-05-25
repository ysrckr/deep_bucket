import axios, { AxiosRequestConfig } from 'axios';

import { apiBaseURL } from './constants';

export const errorMessages: string[] = [];

console.log(errorMessages);

const request = axios.create({
  baseURL: apiBaseURL,
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

export const get = (url: string, config?: AxiosRequestConfig) => {
  return request.get(url, config);
};

export const post = (
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) => {
  return request.post(url, data, config);
};

export const update = (
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) => {
  return request.patch(url, data, config);
};

export const del = (url: string, config?: AxiosRequestConfig) => {
  return request.delete(url, config);
};
