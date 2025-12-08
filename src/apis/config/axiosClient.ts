import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ophim1.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const axiosClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.get(url, config) as Promise<T>;
  },

  post: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return axiosInstance.post(url, data, config) as Promise<T>;
  },

  put: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return axiosInstance.put(url, data, config) as Promise<T>;
  },

  patch: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return axiosInstance.patch(url, data, config) as Promise<T>;
  },

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.delete(url, config) as Promise<T>;
  },
};

export default axiosClient;
