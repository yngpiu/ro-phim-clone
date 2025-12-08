import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/components/layout/RootLayout/RootLayout';
import FilmDetailPage from '@/pages/FilmDetailPage/FilmDetailPage';
import FilmListPage from '@/pages/FilmListPage/FilmListPage';
import HomePage from '@/pages/HomePage/HomePage';
import TopicListPage from '@/pages/TopicListPage/TopicListPage';
import WatchFilmPage from '@/pages/WatchFilmPage/WatchFilmPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
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
