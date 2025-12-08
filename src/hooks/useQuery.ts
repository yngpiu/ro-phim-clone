import type { AxiosRequestConfig } from 'axios';
import { useEffect, useMemo, useState } from 'react';

import axiosClient from '@/apis/config/axiosClient';

interface OphimApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T;
}

interface UseQueryState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseQueryReturn<T> extends UseQueryState<T> {
  refetch: () => void;
}

function useQuery<T>(
  url: string,
  config?: AxiosRequestConfig
): UseQueryReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const configKey = useMemo(() => {
    return config ? JSON.stringify(config) : '';
  }, [config]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const rawResponse = await axiosClient.get<OphimApiResponse<T>>(
        url,
        config
      );
      setData(rawResponse.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const rawResponse = await axiosClient.get<OphimApiResponse<T>>(
          url,
          config
        );
        if (!ignore) {
          setData(rawResponse.data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err as Error);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
  }, [url, configKey, config]);

  return { data, loading, error, refetch: fetchData };
}

export default useQuery;
