import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  // baseURL: 'https://prod-usea2-oikou-fn.azurewebsites.net',
  baseURL: 'http://localhost:7071/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-User-Id': 'test',
  },
});

export default api;
