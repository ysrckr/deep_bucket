import axios, { AxiosRequestConfig } from 'axios';

import { apiBaseURL } from './constants';

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

export const get = (url: string, config?: AxiosRequestConfig) =>
  request.get(url, config);

export const post = (
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) => request.post(url, data, config);

export const update = (
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) => request.patch(url, data, config);

export const del = (url: string, config?: AxiosRequestConfig) =>
  request.delete(url, config);
