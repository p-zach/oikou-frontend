import { getOrCreateLocalUUID } from '@/utils/local-uuid';
import axios, { AxiosInstance, isAxiosError } from 'axios';

let api: AxiosInstance | null = null;

export async function getAPI() : Promise<AxiosInstance> {
  if (api !== null) {
    return api;
  }

  const localUUID = await getOrCreateLocalUUID();

  api = axios.create({
    baseURL: 'https://prod-usea2-oikou-fn.azurewebsites.net/api/v1',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'X-User-Id': localUUID,
    },
  });
  return api;
};

export const logApiError = (error: unknown): void => {
  if (isAxiosError(error)) {
    console.error('Axios error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}