import { getOrCreateLocalUUID } from '@/utils/local-uuid';
import axios, { AxiosInstance } from 'axios';

let api: AxiosInstance | null = null;

export default async function getAPI() : Promise<AxiosInstance> {
  if (api !== null) {
    return api;
  }

  const localUUID = await getOrCreateLocalUUID();

  api = axios.create({
    // baseURL: 'https://prod-usea2-oikou-fn.azurewebsites.net',
    baseURL: 'http://localhost:7071/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'X-User-Id': localUUID,
    },
  });
  return api;
};