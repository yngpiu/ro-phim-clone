import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axiosInstance = axios.create({
  baseURL: 'https://ophim1.com/v1/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const cachedAxios = setupCache(axiosInstance, {
  ttl: 5 * 60 * 1000,
  interpretHeader: false,
  methods: ['get'],
  cachePredicate: {
    statusCheck: status => status >= 200 && status < 300,
  },
});

cachedAxios.interceptors.response.use(
  response => {
    return { ...response, data: response.data };
  },
  (error: AxiosError) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const axiosClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await cachedAxios.get(url, config);
    return response.data as T;
  },

  post: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await cachedAxios.post(url, data, config);
    return response.data as T;
  },

  put: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await cachedAxios.put(url, data, config);
    return response.data as T;
  },

  patch: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await cachedAxios.patch(url, data, config);
    return response.data as T;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await cachedAxios.delete(url, config);
    return response.data as T;
  },
};

export default axiosClient;
