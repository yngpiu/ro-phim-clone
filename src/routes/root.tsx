import type { CacheRequestConfig } from 'axios-cache-interceptor';
import { createBrowserRouter } from 'react-router-dom';

import axiosClient from '@/apis/config/axiosClient';
import ErrorScreen from '@/components/ErrorScreen/ErrorScreen';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import NotFoundScreen from '@/components/NotFoundScreen/NotFoundScreen';
import type { OphimApiResponse } from '@/hooks/useQuery';
import RootLayout from '@/layout/RootLayout/RootLayout';
import FilmDetailPage from '@/pages/FilmDetailPage/FilmDetailPage';
import FilmListPage from '@/pages/FilmListPage/FilmListPage';
import HomePage from '@/pages/HomePage/HomePage';
import TopicListPage from '@/pages/TopicListPage/TopicListPage';
import WatchFilmPage from '@/pages/WatchFilmPage/WatchFilmPage';
import type { FilmListAPIResponse } from '@/types/api.types';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundScreen />,
    hydrateFallbackElement: <LoadingScreen />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          const response = await axiosClient.get<
            OphimApiResponse<FilmListAPIResponse>
          >('danh-sach/phim-chieu-rap', {
            params: {
              page: 1,
              limit: 5,
            },
            cache: { ttl: 5 * 60 * 1000 }, // Enable cache 5 phút
          } as CacheRequestConfig);
          return response.data;
        },
        errorElement: <ErrorScreen />,
      },
      {
        path: 'the-loai/:slug',
        element: <FilmListPage />,
      },
      {
        path: 'quoc-gia/:slug',
        element: <FilmListPage />,
      },
      {
        path: 'phim-le',
        element: <FilmListPage />,
      },
      {
        path: 'phim-bo',
        element: <FilmListPage />,
      },
      {
        path: 'chu-de',
        element: <TopicListPage />,
      },
      {
        path: 'chu-de/:slug',
        element: <FilmListPage />,
      },
      { path: 'phim/:slug', element: <FilmDetailPage /> },

      { path: 'xem-phim/:slug', element: <WatchFilmPage /> },
    ],
  },
]);

export default router;
