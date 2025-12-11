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
  cache?: boolean | number; // true = 5 phút, false = không cache, number = custom TTL (ms)
};

function useQuery<T>(
  url: string,
  options?: UseQueryOptions
): UseQueryReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { config, cache = false } = options || {};

  const configKey = useMemo(() => {
    return config ? JSON.stringify(config) : '';
  }, [config]);

  // Tính toán cache TTL
  const cacheTTL = useMemo(() => {
    if (cache === false) return undefined;
    if (cache === true) return 5 * 60 * 1000; // 5 phút
    return cache; // custom TTL
  }, [cache]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // refetch luôn bỏ qua cache
      const rawResponse = await axiosClient.get<OphimApiResponse<T>>(url, {
        ...config,
        cache: cacheTTL ? { override: true, ttl: cacheTTL } : undefined,
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
        // Cache theo option
        const rawResponse = await axiosClient.get<OphimApiResponse<T>>(url, {
          ...config,
          cache: cacheTTL ? { ttl: cacheTTL } : undefined,
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
