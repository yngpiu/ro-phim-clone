import type { AxiosRequestConfig } from 'axios';
import type { CacheRequestConfig } from 'axios-cache-interceptor';
import { useEffect, useMemo, useState } from 'react';

import axiosClient from '@/apis/config/axiosClient';

export type OphimApiResponse<T> = {
  status: 'success' | 'error';
  message: string;
  data: T;
};

type UseQueryState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

type UseQueryReturn<T> = UseQueryState<T> & {
  refetch: () => void;
};

type UseQueryOptions = {
  config?: AxiosRequestConfig;
  cache?: { ttl: number };
};

function useQuery<T>(
  url: string,
  options?: UseQueryOptions
): UseQueryReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { config, cache } = options || {};

  const configKey = useMemo(() => {
    return config ? JSON.stringify(config) : '';
  }, [config]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const rawResponse = await axiosClient.get<OphimApiResponse<T>>(url, {
        ...config,
        cache: cache ? { ...cache, override: true } : undefined,
      } as CacheRequestConfig);
      setData(rawResponse.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const rawResponse = await axiosClient.get<OphimApiResponse<T>>(url, {
          ...config,
          cache,
        } as CacheRequestConfig);
        if (!ignore) {
          setData(rawResponse.data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err as Error);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, configKey]);

  return { data, isLoading, error, refetch: fetchData };
}

export default useQuery;
